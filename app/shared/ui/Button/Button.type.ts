
export type ButtonVariant = "find" | "booking" | "resume" | "minus" | "plus" | "aroow_left" | "arrow_right" | "number_date" | "bordered";

export interface ButtonProps {
    text: string;
    variant?: ButtonVariant;
    onClick:() => void; 
}