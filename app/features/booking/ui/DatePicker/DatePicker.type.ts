export interface DatePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    hoverDate: Date | null;
    onSelectDate: (date: Date) => void;
    onHoverDate: (date: Date | null) => void;
}