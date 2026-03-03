import { isDateInRange, isSelectableDate, isTodayDate } from "../../model/booking.rules";
import { getDaysMatrix } from "../../model/utils/getDaysMatrix";
import { getMonthsArray } from "../../model/utils/getMonthsArray";

const DatePicker = () => {
    const monthsArray = getMonthsArray();
    const year = new Date().getFullYear();

    const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    const monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    return (
        <div className="date-picker-container">
            <p className="date-picker-title">Дата поездки</p>

            <table className="weekday-header">
                <thead>
                    <tr>
                        {daysOfWeek.map((day) => (
                            <th key={day} className="day-name">
                                <div className="weekday-names">
                                    {day}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {monthsArray.map((month, monthIndex) => {
                    const daysMatrix = getDaysMatrix(year, month.getMonth());

                    const monthNumber = month.getMonth();

                    const firstDayOfMonth = new Date(year, monthNumber, 1);
                    const lastDayOfMonth = new Date(year, monthNumber + 1, 0);

                    return (
                        <tbody className="weekdays-table">
                            {daysMatrix.map((row, rowId) => (
                                <tr key={rowId} className="weekdays-table-row">
                                    {row.map((day, cellId) => {
                                        if (!day) return <td key={cellId}></td>;
                                        
                                        const currentDate = new Date(year, monthNumber, day);

                                        const isSeletable = isSelectableDate(year, monthNumber, day, lastDayOfMonth);
                                        const isInRange = isDateInRange(currentDate, firstDayOfMonth, lastDayOfMonth);
                                        const isToday = isTodayDate(currentDate);

                                        <td key={cellId} className="weekdays-table-cell">
                                                <div className={`
                                                    weekday-cell
                                                    ${!isSeletable ? "desabled" : ''}
                                                    ${isInRange ? "selected" : ''}
                                                    ${isToday ? "today" : ''}
                                                `}>
                                                    {day}
                                                </div>
                                        </td>
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}