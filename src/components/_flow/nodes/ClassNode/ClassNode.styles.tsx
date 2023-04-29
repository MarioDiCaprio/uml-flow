import {styled} from "@mui/material";


export const Context = styled('div')<{ col: string }>`
  background: #ffffff;
  min-width: 250px;
  font-family: "Fira Code", monospace;
`;

export const Header = styled('div')<{ col: string }>`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.col};
  color: #fff;
  font-weight: bold;
`;

export const Content = styled('div')<{ selected: boolean | undefined }>`
  width: 100%;
  min-height: 25px;
  padding: 10px;
  border: 2px solid ${props => props.selected? props.theme.palette.primary.main : props.theme.palette.divider};
  border-top: none;
`;