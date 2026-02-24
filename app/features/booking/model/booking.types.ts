export type GuestCount = {
    adults: number;
    childrenUnder7: number;
    children7to17: number;
}


export type BookingFormData = {
    startDate: Date;
    endDate: Date;
    guests: GuestCount;
}