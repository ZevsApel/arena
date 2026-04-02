import { DaySellProps } from "./DayCell.type";

const DayCell = ({ day, currentDate, isSelectable, isToday, range, onSelect, onHover }: DaySellProps) => {
    return (
        <td className="date-picker__cell">
            <div
                className={`
                    date-picker__day
                    ${!isSelectable ? "date-picker__day--disabled" : ""}
                    ${range.inRange ? "date-picker__day--in-range" : ""}
                    ${range.isStart ? "date-picker__day--range-start" : ""}
                    ${range.isEnd ? "date-picker__day--range-end" : ""}
                    ${isToday ? "date-picker__day--today" : ""}
                `}
                onClick={() => isSelectable && onSelect(currentDate)}
                onMouseEnter={() => {
                    if (!isSelectable) return;
                    onHover(currentDate);
                }}
                onMouseLeave={() => onHover(null)}
            >
                {day}
            </div>
        </td>
    )
}

export default DayCell;