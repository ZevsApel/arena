
export type ButtonVatiant = "find" | "booking" | "resume" | "minus" | "plus" | "aroow_left" | "arrow_right" | "number_date";

export interface ButtonProps {
    text: string;
    variant?: ButtonVatiant;
    onClick:() => void; 
}