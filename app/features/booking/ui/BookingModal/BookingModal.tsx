import { BookingModalProps } from "./BookingModal.type";
import DatePicker from "../DatePicker/DatePicker";
import { start } from "repl";

const BookingModal = ({ open, onClose, onSubmit, startDate, endDate, onSelectDate, hoverDate, onHoverDate }: BookingModalProps) => {

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
            </div>
        </div>
    );
}

export default BookingModal;