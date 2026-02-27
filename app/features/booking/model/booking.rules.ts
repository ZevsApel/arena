import { Guests } from "./booking.types";

const normalize = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const isDateValid = (
    start: Date | null,
    end: Date | null
) => {
    if(!start || !end) return false;

    const startDay = normalize(start);
    const endDay = normalize(end);

    return endDay > startDay;
}

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