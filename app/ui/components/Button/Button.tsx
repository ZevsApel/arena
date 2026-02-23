import { ButtonProps } from "./Button.type";

const Button = ({ text, variant, onClick }: ButtonProps) => {
    return <button className={`btn ${variant}`} onClick={onClick}>{text}</button>
}

export default Button;