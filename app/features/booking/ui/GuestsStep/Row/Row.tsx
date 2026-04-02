import { RowProps } from "../../../model/booking.types";

const Row = ({ label, value, min, max, onChange }: RowProps) => {
    return (
        <div className="guests-step__row">
            <span className="guests-step__label">{label}</span>

            <div className="guests-step__controls">
                <button
                    onClick={() => onChange(value - 1)}
                    disabled={value <= min}
                >
                    -
                </button>

                <span className="guests-step__value">{value}</span>

                <button
                    onClick={() => onChange(value + 1)}
                    disabled={value >= max}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Row;