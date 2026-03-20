import { useState } from "react";
import { BookingFormData } from "../booking.types";
import { validateBooking } from "../validateBooking";

export const useBookingState = () => {
    const [data, setData] = useState<BookingFormData>({
        startDate: null,
        endDate: null,
        guests: {
            adults: 2,
            childrenUnder7: 0,
            children7to17: 0,
        },
        rooms: 1,
    });
    const [open, setOpen] = useState(false);
    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    const submit = (formData: BookingFormData) => {
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


    return {
        open,
        data,
        hoverDate,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
        submit,
        setDate,
        setHover,
    };
}