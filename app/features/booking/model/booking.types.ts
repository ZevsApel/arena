export type Guests = {
    adults: number;
    childrenUnder7: number;
    children7to17: number;
}


export type BookingFormData = {
    startDate: Date | null;
    endDate: Date | null;
    guests: Guests;
    rooms: number;
}

export interface DateRangeState {
    inRange: boolean;
    isStart: boolean;
    isEnd: boolean;
}