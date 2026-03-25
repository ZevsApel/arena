import { BookingFormData, Guests } from "../../model/booking.types";

export interface BookingModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: BookingFormData) => void;

    startDate: Date | null;
    endDate: Date | null;
    onSelectDate: (date: Date) => void;
    hoverDate: Date | null;
    onHoverDate: (date: Date | null) => void;

    data: BookingFormData;
    addRoom: () => void;
    removeRoom: (id: string) => void;
    updateGuests: (roomId: string, guests: Partial<Guests>) => void;

    reset: () => void;
}