import { BookingFormData } from "../../model/booking.types";

export interface BookingModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: BookingFormData) => void;
}