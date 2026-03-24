import { BookingModalProps } from "./BookingModal.type";
import DatePicker from "../DatePicker/DatePicker";
import GuestsStep from "../GuestsStep/GuestsStep";

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
}: BookingModalProps) => {

    return (
        <div className={`booking-modal-container ${open ? 'opened' : ''}`}>
            <div className="booking-modal-block">
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
        </div>
    );
}

export default BookingModal;