import { normalizeMonthStart } from "../booking.rules"

const getMonthsArray = () => {
    const startMonth: Date = normalizeMonthStart(new Date);

    const months: Date[] = [];
    
    const maxMonth = new Date(startMonth.getFullYear(), startMonth.getMonth() + 6, 1);

    let pointer = new Date(startMonth);

    while (pointer <= maxMonth) {
        months.push(new Date(pointer));
        pointer = new Date(pointer.getFullYear(), pointer.getMonth() + 1, 1);
    }

    return months
}

export default getMonthsArray();