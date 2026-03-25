import { DateRangeState, Guests, Room } from "./booking.types";

///////////////////////////////////////////////////////////
// DATE HELPERS
///////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////
// DATE VALIDATION
///////////////////////////////////////////////////////////

export const isDateValid = (
    start: Date | null,
    end: Date | null
): boolean => {
    if (!start || !end) return false;

    return normalize(end).getTime() > normalize(start).getTime();
};

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
    } else if (startDate && hoverDate) {
        const [rangeStart, rangeEnd] =
            hoverDate > startDate
                ? [startDate, hoverDate]
                : [hoverDate, startDate];

        inRange = date >= rangeStart && date <= rangeEnd;
        isStart = isSameDay(date, startDate);
        isEnd = isSameDay(date, hoverDate);
    }

    return { inRange, isStart, isEnd };
};

///////////////////////////////////////////////////////////
// BOOKING LIMITS
///////////////////////////////////////////////////////////

export const BOOKING_LIMITS = {
    maxAdults: 4,
    maxChildrenUnder7: 3,
    maxChildren7to17: 3,
    maxTotalGuestsPerRoom: 5,
};

///////////////////////////////////////////////////////////
// GUESTS VALIDATION
///////////////////////////////////////////////////////////

export const isGuestsValid = (guests: Guests) => {
    const errors: Partial<Record<keyof Guests | "total", string>> = {};

    const { adults, children7to17, childrenUnder7 } = guests;

    const total =
        adults + children7to17 + childrenUnder7;

    // adults
    if (!Number.isFinite(adults) || adults <= 0) {
        errors.adults = "Минимум 1 взрослый";
    } else if (adults > BOOKING_LIMITS.maxAdults) {
        errors.adults = `Максимум ${BOOKING_LIMITS.maxAdults}`;
    }

    // children under 7
    if (!Number.isFinite(childrenUnder7) || childrenUnder7 < 0) {
        errors.childrenUnder7 = "Некорректное количество";
    } else if (childrenUnder7 > BOOKING_LIMITS.maxChildrenUnder7) {
        errors.childrenUnder7 = `Максимум ${BOOKING_LIMITS.maxChildrenUnder7}`;
    }

    // children 7–17
    if (!Number.isFinite(children7to17) || children7to17 < 0) {
        errors.children7to17 = "Некорректное число";
    } else if (children7to17 > BOOKING_LIMITS.maxChildren7to17) {
        errors.children7to17 = `Максимум ${BOOKING_LIMITS.maxChildren7to17}`;
    }

    // total
    if (total > BOOKING_LIMITS.maxTotalGuestsPerRoom) {
        errors.total = `Максимум ${BOOKING_LIMITS.maxTotalGuestsPerRoom} гостей в номере`;
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
};

///////////////////////////////////////////////////////////
// ROOMS VALIDATION
///////////////////////////////////////////////////////////

export const isRoomsValid = (rooms: number) => rooms > 0;

export const isRoomsDataValid = (roomsData: Room[]) => {
    if (!roomsData.length) return false;

    return roomsData.every((room) =>
        isGuestsValid(room.guests).valid
    );
};