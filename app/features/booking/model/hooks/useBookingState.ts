import { useState } from "react";
import { BookingFormData, Guests, Room } from "../booking.types";
import { validateBooking } from "../validateBooking";
import { BOOKING_LIMITS, isRoomsDataValid } from "../booking.rules";


const createRoom = (): Room => ({
    id: crypto.randomUUID(),
    guests: {
        adults: 2,
        childrenUnder7: 0,
        children7to17: 0,
    }
});


const clampGuests = (guests: Guests): Guests => {
    const adults = Math.min(Math.max(guests.adults, 1), BOOKING_LIMITS.maxAdults);

    const childrenUnder7 = Math.min(Math.max(guests.childrenUnder7, 0), BOOKING_LIMITS.maxChildrenUnder7);

    const children7to17 = Math.min(Math.max(guests.children7to17, 0), BOOKING_LIMITS.maxChildren7to17);

    let total = adults + children7to17 + childrenUnder7;


    if (total > BOOKING_LIMITS.maxTotalGuestsPerRoom) {
        let overflow = total - BOOKING_LIMITS.maxTotalGuestsPerRoom;

        let c7 = children7to17;
        let cU7 = childrenUnder7;

        while (overflow > 0 && (c7 > 0 || cU7 > 0)) {
            if (c7 > 0) {
                c7--
            } else if (cU7 > 0) {
                cU7--;
            }
            overflow--;
        }

        return {
            adults,
            childrenUnder7: cU7,
            children7to17: c7
        }
    }

    return { adults, children7to17, childrenUnder7 }
}






export const useBookingState = () => {
    const [data, setData] = useState<BookingFormData>({
        startDate: null,
        endDate: null,

        roomsData: [createRoom()],
    });
    const [open, setOpen] = useState(false);
    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    const submit = (formData: BookingFormData) => {

        if (formData.roomsData) {
            const valid = isRoomsDataValid(formData.roomsData);
            if (!valid) return { valid: false };
        }


        const result = validateBooking(formData);

        if (!result.valid) {
            return result;
        }

        setData(formData);

        return { valid: true };
    }

    const setDate = (date: Date) => {
        setData((prev) => {
            if (!prev.startDate) {
                return { ...prev, startDate: date };
            }

            if (!prev.endDate) {
                if (date < prev.startDate) {
                    return {
                        ...prev,
                        startDate: date,
                        endDate: prev.startDate,
                    };
                }

                return { ...prev, endDate: date };
            }

            return {
                ...prev,
                startDate: date,
                endDate: null,
            };
        });

        setHoverDate(null);
    };

    const setHover = (date: Date | null) => {
        setHoverDate(date);
    };

    const addRoom = () => {
        setData((prev) => {
            const roomsData = prev.roomsData ?? [createRoom()];

            return {
                ...prev,
                roomsData: [...roomsData, createRoom()],
                rooms: roomsData.length + 1,
            };
        });
    };

    const removeRoom = (id: string) => {
        setData((prev) => {
            const roomsData = (prev.roomsData ?? []).filter(room => room.id !== id);

            return {
                ...prev,
                roomsData,
                rooms: roomsData.length,
            }
        })
    }

    const updateGuests = (roomId: string, guests: Partial<Guests>) => {
        setData((prev) => {
            const roomsData = (prev.roomsData ?? []).map((room) => {
                if (room.id !== roomId) return room;
    
                const merged = {
                    ...room.guests,
                    ...guests,
                };
    
                return {
                    ...room,
                    guests: clampGuests(merged),
                };
            });
    
            return {
                ...prev,
                roomsData,
            };
        });
    };


    return {
        open,
        data,
        hoverDate,

        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),

        submit,
        setDate,
        setHover,

        addRoom,
        removeRoom,
        updateGuests,
    };
}