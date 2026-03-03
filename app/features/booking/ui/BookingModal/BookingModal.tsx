import { useState } from "react";
import { BookingModalProps } from "./BookingModal.type";
import { getMonthsArray } from "../../model/utils/getMonthsArray";

const BookingModal = ({ open, onClose, onSubmit }: BookingModalProps) => {

    return (
        <div className={`booking-modal-container ${open ? 'opened' : ''}`}>
            <div className="booking-modal-block">
                
            </div>
        </div>
    );
}

export default BookingModal;