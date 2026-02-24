import { useState } from "react";
import { BookingModalProps } from "./BookingModal.type";

const BookingModal = ({ open, onClose, onSubmit }: BookingModalProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [adults, setAdults] = useState(2);
    const [childrenUnder7, setChildrenUnder7] = useState(1);
    const [children7to17, setChilred7to17] = useState(0);

    const hadleConfirm = () => {
        if(!startDate || !endDate) return;

        onSubmit({
            startDate,
            endDate,
            guests: { adults, childrenUnder7, children7to17},
        })
    }

    if(!open) return null;


    return (
        <div className={`booking-modal-container ${open ? 'opened' : ''}`}>
            <div className="booking-modal-block">

            </div>
        </div>
    );
}

export default BookingModal;