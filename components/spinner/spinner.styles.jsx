import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  user-select: none;
`;

export const CustomSpinner = styled(CircularProgress)`
  color: ${({ theme }) =>
    theme.palette ? theme.palette.secondary.main : `black`};
  width: 60px !important;
  height: 60px !important;
`;
