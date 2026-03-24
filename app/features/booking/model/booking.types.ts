export interface Guests {
    adults: number;
    childrenUnder7: number;
    children7to17: number;
}

export interface GuestsStepProps {
    data: BookingFormData;
    addRoom: () => void;
    removeRoom: (id: string) => void;
    updateGuests: (roomId: string, guests: Partial<Guests>) => void
}

export interface Room {
    id: string;
    guests: Guests;
}

export interface RowProps {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (v: number) => void;
}

export interface BookingFormData {
    startDate: Date | null;
    endDate: Date | null;

    roomsData: Room[];
}

export interface DateRangeState {
    inRange: boolean;
    isStart: boolean;
    isEnd: boolean;
}