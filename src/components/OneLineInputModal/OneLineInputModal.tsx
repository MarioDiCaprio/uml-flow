import React, {ChangeEvent, useState} from "react";
import {Button, ButtonGroup, Modal} from "@mui/material";
import {ButtonContainer, Context, ModalInput, ModalTitle} from "./OneLineInputModal.styles";


interface OneLineInputModalProps {
    open: boolean;
    title?: string;
    defaultValue?: string,
    onInput?: (input: string) => void;
    onClose?: () => void;
}

const OneLineInputModal: React.FC<OneLineInputModalProps> = ({ open, title, defaultValue, onInput, onClose }) => {
    const [value, setValue] = useState<string>(defaultValue ?? '');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function handleClose() {
        if (onClose) onClose();
    }

    function handleInputConfirmed() {
        if (onInput) onInput(value);
        handleClose();
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Context>

                <ModalTitle>
                    { title }
                </ModalTitle>

                <ModalInput
                    fullWidth
                    defaultValue={defaultValue}
                    onChange={handleChange}
                />

                <ButtonContainer>
                    <ButtonGroup>

                        <Button variant="contained" onClick={handleInputConfirmed}>
                            OK
                        </Button>

                        <Button variant="contained" onClick={handleClose}>
                            Close
                        </Button>

                    </ButtonGroup>
                </ButtonContainer>
            </Context>
        </Modal>
    );
}

export default OneLineInputModal;