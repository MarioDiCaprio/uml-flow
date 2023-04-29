import {styled, Table} from "@mui/material";


export const StyledTable = styled(Table)`
  th, td {
    font-family: "Fira Code", monospace;
  }
  tr:last-child > td {
    border-bottom: none;
  }
`;