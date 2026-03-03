import { Guests } from "./booking.types";

// Проверки для даты

export const normalize = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const normalizeMonthStart = (date: Date): Date => 
    new Date(date.getFullYear(), date.getMonth(), 1);

export const isDateValid = (
    start: Date | null,
    end: Date | null
) => {
    if(!start || !end) return false;

    const startDay = normalize(start);
    const endDay = normalize(end);

    return endDay > startDay;
}

export const isSelectableDate = (
    year: number,
    month: number,
    day: number,
    maxDate: Date
): boolean => {
    const today = normalize(new Date());
    const current = new Date(year, month, day);

    return current >= today && current <= normalize(maxDate);
};

export const isTodayDate = (date: Date) => {
    const today = new Date();

    return date === today;
}

export const isDateInRange = (date: Date, start: Date, end: Date) => {
    const normalizedDate = normalize(date);
    const normalizedStart = normalize(start);
    const normalizedEnd = normalize(end);

    return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
}


//////////////////////////////////////


export const isGuestsValid = (guests: Guests) => {
    const errors: Partial<Record<keyof Guests, string>> = {}

    const { adults, children7to17, childrenUnder7 } = guests;

    if(!Number.isFinite(adults) || adults <=0) {
        errors.adults = "Минимум 1 взрослый"
    }

    if(!Number.isFinite(childrenUnder7) || childrenUnder7 < 0) {
        errors.childrenUnder7 = "Некорректное количество"
    }

    if(!Number.isFinite(children7to17) || children7to17 < 0) {
        errors.children7to17 = "Некорректное число"
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }
}


export const isRoomsValid = (rooms: number) => rooms > 0;