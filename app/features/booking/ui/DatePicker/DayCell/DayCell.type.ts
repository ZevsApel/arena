export interface DaySellProps {
    day: number;
    currentDate: Date;
    isSelectable: boolean;
    isToday: boolean;
    range: DateRangeState;
    onSelect: (date: Date) => void;
    onHover: (date: Date | null) => void;
}

interface DateRangeState {
    inRange: boolean;
    isStart: boolean;
    isEnd: boolean;
}