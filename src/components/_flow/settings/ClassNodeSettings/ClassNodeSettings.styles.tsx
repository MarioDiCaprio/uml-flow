import {styled, Table} from "@mui/material";


export const StyledTable = styled(Table)`
  td {
    font-family: "Fira Code", monospace;
    &:last-child {
      text-align: right;
    }
  }
`;