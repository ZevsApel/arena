'use client'

import { BookingModalProps } from "./BookingModal.type";
import DatePicker from "../DatePicker/DatePicker";
import GuestsStep from "../GuestsStep/GuestsStep";
import { useEffect, useState } from "react";
import Button from "@/app/shared/ui/Button/Button";
import ConfirmModal from "@/app/shared/ui/ConfirmModal/ConfirmModal";

const BookingModal = ({
    open,
    onClose,
    onSubmit,
    startDate,
    endDate,
    onSelectDate,
    hoverDate,
    onHoverDate,

    data,
    addRoom,
    removeRoom,
    updateGuests,

    reset,
}: BookingModalProps) => {

    const [step, setStep] = useState(0);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleNextStep = () => {
        setStep(1);
    }

    const handleResetClick = () => {
        setConfirmOpen(true);
    };

    const handleConfirmReset = () => {
        reset();
        setStep(0);
        setConfirmOpen(false);
    }

    const handleCancelReset = () => {
        setConfirmOpen(false);
    }

    useEffect(() => {
        if (!open) {
            setStep(0)
        }
    }, [open]);

    return (
        <div className={`booking-modal ${open ? 'opened' : ''}`}>
            <div className="booking-modal__body">
                <div className="booking-modal__track">
                    <DatePicker
                        startDate={startDate}
                        endDate={endDate}
                        hoverDate={hoverDate}
                        onSelectDate={onSelectDate}
                        onHoverDate={onHoverDate}
                    />

                    <GuestsStep
                        data={data}
                        addRoom={addRoom}
                        removeRoom={removeRoom}
                        updateGuests={updateGuests}
                    />
                </div>
                <div className="booking-modal__buttons">
                    <Button text="Очистить" variant="bordered" onClick={handleResetClick} />
                    <Button text="Продолжить" variant="resume" onClick={handleNextStep} />
                </div>
            </div>

            <ConfirmModal
                open={confirmOpen}
                title="Сброс данных"
                description="Сбросить даты и гостей до значений по умолчанию?"
                onConfirm={handleConfirmReset}
                onCancel={handleCancelReset}
            />
        </div>
    );
}

export default BookingModal;