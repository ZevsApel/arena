import { BookingFormData } from "../../model/booking.types";

export interface BookingModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: BookingFormData) => void;
    startDate: Date | null;
    endDate: Date | null;
    onSelectDate: (date: Date) => void;
    hoverDate: Date | null;
    onHoverDate: (date: Date | null) => void;
}