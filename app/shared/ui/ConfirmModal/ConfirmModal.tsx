import Button from "../Button/Button";
import { ConfirmModalProps } from "./ConfirmModal.type";

const ConfirmModal = ({
    open,
    title = "Подтверждение",
    description = "Вы уверены?",
    onConfirm,
    onCancel
}: ConfirmModalProps) => {
    if (!open) return null;

    return (
        <div className="confirm-modal">
            <div className="confirm-modal__overlay" onClick={onCancel} />
            <div className="confirm-modal__content">
                <h3 className="confirm-modal__title">{title}</h3>
                <p className="confirm-modal__description">{description}</p>

                <div className="confirm-modal__actions">
                    <Button text="Отмена" onClick={onCancel} />

                    <Button text="Подтвердить" onClick={onConfirm} />
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;