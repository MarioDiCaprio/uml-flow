import {Paper, styled, TextField} from "@mui/material";


export const Context = styled(Paper)`
  width: 500px;
  max-width: 100%;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled('span')`
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalInput = styled(TextField)`
  margin: 10px 0 10px 0;
  * {
    font-family: "Fira Code", monospace;
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: row-reverse;
`;
