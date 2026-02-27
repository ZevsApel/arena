import { BookingFormData } from "./booking.types";
import * as rules from "./booking.rules";

export const validateBooking = (data: BookingFormData) => {
    const { startDate, endDate, guests, rooms } = data;

    if(!rules.isDateValid(startDate, endDate)) {
        return { valid: false, error: "Выбраны некорректные даты" }
    }

    const guestsValidation = rules.isGuestsValid(guests);

    if(!guestsValidation.valid) {
        return { valid: false, error: "некорректные данные гостей"}
    }

    if(rules.isRoomsValid(rooms)) {
        return { valid: false, error: "Миниму 1 номер"}
    }

    return { valid: true }
}