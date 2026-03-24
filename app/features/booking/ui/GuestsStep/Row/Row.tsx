import { RowProps } from "../../../model/booking.types";

const Row = ({ label, value, min, max, onChange }: RowProps) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
            }}
        >
            <span>{label}</span>

            <div style={{ display: "flex", gap: 8 }}>
                <button
                    onClick={() => onChange(value - 1)}
                    disabled={value <= min}
                >
                    -
                </button>

                <span>{value}</span>

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