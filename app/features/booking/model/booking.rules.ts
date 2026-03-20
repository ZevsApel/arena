import { DateRangeState, Guests } from "./booking.types";

// Проверки для даты

export const normalize = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const normalizeMonthStart = (date: Date): Date =>
    new Date(date.getFullYear(), date.getMonth(), 1);

export const isSameDay = (a: Date, b: Date) =>
    normalize(a).getTime() === normalize(b).getTime();

export const isAfter = (a: Date, b: Date) =>
    normalize(a).getTime() > normalize(b).getTime();

export const isBefore = (a: Date, b: Date) =>
    normalize(a).getTime() < normalize(b).getTime();

export const isInRange = (date: Date, start: Date, end: Date) => {
    const d = normalize(date).getTime();
    const s = normalize(start).getTime();
    const e = normalize(end).getTime();

    return d >= s && d <= e;
};

export const isTodayDate = (date: Date): boolean =>
    isSameDay(date, new Date());

export const isSelectableDate = (
    year: number,
    month: number,
    day: number,
    maxDate: Date
): boolean => {
    const today = normalize(new Date());
    const current = normalize(new Date(year, month, day));

    return current >= today && current <= normalize(maxDate);
};


export const isDateValid = (
    start: Date | null,
    end: Date | null
) => {
    if (!start || !end) return false;

    const startDay = normalize(start);
    const endDay = normalize(end);

    return endDay > startDay;
}


export const getRangeState = (
    date: Date,
    startDate: Date | null,
    endDate: Date | null,
    hoverDate: Date | null
): DateRangeState => {
    let inRange = false;
    let isStart = false;
    let isEnd = false;

    if (startDate && endDate) {
        inRange = date >= startDate && date <= endDate;
        isStart = isSameDay(date, startDate);
        isEnd = isSameDay(date, endDate);
    } else if (startDate && !endDate && hoverDate) {
        const [rangeStart, rangeEnd] =
            hoverDate > startDate ? [startDate, hoverDate] : [hoverDate, startDate];
        inRange = date >= rangeStart && date <= rangeEnd;
        isStart = isSameDay(date, startDate);
        isEnd = isSameDay(date, hoverDate);
    }

    return { inRange, isStart, isEnd };
};




//////////////////////////////////////


export const isGuestsValid = (guests: Guests) => {
    const errors: Partial<Record<keyof Guests, string>> = {}

    const { adults, children7to17, childrenUnder7 } = guests;

    if (!Number.isFinite(adults) || adults <= 0) {
        errors.adults = "Минимум 1 взрослый"
    }

    if (!Number.isFinite(childrenUnder7) || childrenUnder7 < 0) {
        errors.childrenUnder7 = "Некорректное количество"
    }

    if (!Number.isFinite(children7to17) || children7to17 < 0) {
        errors.children7to17 = "Некорректное число"
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }
}


export const isRoomsValid = (rooms: number) => rooms > 0;