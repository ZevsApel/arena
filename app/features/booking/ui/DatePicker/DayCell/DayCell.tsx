import { DaySellProps } from "./DayCell.type";

const DayCell = ({ day, currentDate, isSelectable, isToday, range, onSelect, onHover }: DaySellProps) => {
    return (
        <td className="weekdays-table-cell">
            <div
                className={`
                    weekday-cell
                    ${!isSelectable ? "disabled" : ""}
                    ${range.inRange ? "in-range" : ""}
                    ${range.isStart ? "range-start" : ""}
                    ${range.isEnd ? "range-end" : ""}
                    ${isToday ? "today" : ""}
                `}
                onClick={() => isSelectable && onSelect(currentDate)}
                onMouseEnter={() => onHover(currentDate)}
                onMouseLeave={() => onHover(null)}
            >
                {day}
            </div>
        </td>
    )
}

export default DayCell;