import {styled, Table, TextField} from "@mui/material";


export const StyledTextField = styled(TextField)`
  * {
    font-family: "Fira Code", monospace;
  }
`;

export const StyledTable = styled(Table)`
  td {
    font-family: "Fira Code", monospace;
    &:last-child {
      text-align: right;
    }
  }
`;