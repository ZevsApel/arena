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

    const submit = (formData: BookingFormData) => {
        const result = validateBooking(formData);

        if(!result.valid) {
            return result;
        }

        setData(formData);

        return { valid: true };
    }

    return {
        open,
        data,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
        submit,
    };
}