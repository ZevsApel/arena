import { getRangeState, isSameDay, isSelectableDate, isTodayDate } from "../../model/booking.rules";
import { getDaysMatrix } from "../../model/utils/getDaysMatrix";
import { getMonthsArray } from "../../model/utils/getMonthsArray";
import { DatePickerProps } from "./DatePicker.type";
import DayCell from "./DayCell/DayCell";

const DatePicker = ({ startDate, endDate, onSelectDate, onHoverDate, hoverDate }: DatePickerProps) => {
    const year = new Date().getFullYear();
    const monthsArray = getMonthsArray();

    const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    const getMonthName = (date: Date) =>
        new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);

    return (
        <div className="date-picker">
            <p className="date-picker__title">Дата поездки</p>

            <table className="weekday__table">
                <thead>
                    <tr className="date-picker__weekdays">
                        {daysOfWeek.map((day) => (
                            <th key={day} className="date-picker__weekday">
                                <div className="date-picker__day__number">{day}</div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {monthsArray.map((month) => {
                    const monthNumber = month.getMonth();

                    const daysMatrix = getDaysMatrix(year, monthNumber);

                    const firstDayOfMonth = new Date(year, monthNumber, 1);
                    const lastDayOfMonth = new Date(year, monthNumber + 1, 0);

                    return (
                        <tbody key={monthNumber} className="date-picker__body">

                            {/* Заголовок месяца */}
                            <tr className="date-picker__month-row">
                                <td colSpan={7} className="date-picker__month__title">
                                    {getMonthName(month)} {year}
                                </td>
                            </tr>

                            {daysMatrix.map((row, rowId) => (
                                <tr key={rowId} className="date-picker__week">
                                    {row.map((day, cellId) => {
                                        if (!day) return <td key={cellId} />;

                                        const currentDate = new Date(year, monthNumber, day);
                                        const isSelectable = isSelectableDate(year, monthNumber, day, lastDayOfMonth);
                                        const { inRange, isStart, isEnd } = getRangeState(currentDate, startDate, endDate, hoverDate);
                                        const isToday = isTodayDate(currentDate);

                                        return <DayCell
                                            key={cellId}
                                            day={day}
                                            currentDate={currentDate}
                                            isSelectable={isSelectable}
                                            isToday={isToday}
                                            range={{ inRange, isStart, isEnd }}
                                            onSelect={onSelectDate}
                                            onHover={(d) => {
                                                if (!startDate || endDate) return;
                                                onHoverDate(d);
                                            }}
                                        />
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default DatePicker;