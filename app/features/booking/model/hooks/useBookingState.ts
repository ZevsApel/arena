import { useState } from "react";
import { BookingFormData } from "../booking.types";

export const useBookingState = () => {
    const [data, setData] = useState<BookingFormData | null>(null);
    const [open, setOpen] = useState(false);

    return {
        open,
        data,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
        submit: (data: BookingFormData) => setData(data),
    };
}