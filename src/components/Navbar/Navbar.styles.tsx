import {alpha, styled} from "@mui/material";

export const Context = styled('div')`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => alpha(props.theme.palette.background.default, 0.2)};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.palette.border};
  position: sticky;
  top: 0;
`;

export const LinksSection = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LinkContent = styled('span')<{ active: boolean }>`
  color: ${props => props.active? props.theme.palette.text.disabled : props.theme.palette.text.primary};
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    color: ${props => props.theme.palette.text.disabled};
    transition: 0.3s;
  }
`;