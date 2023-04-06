import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ComponentWrapper = styled.div`
  width: 100%;
  &.error {
    .input-container {
      border-color: ${({ theme }) => theme.palette.text.error};
    }
    .input-label {
      color: rgba(211, 47, 47, 0.5);
    }
  }
`;

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
  margin-left: 14px;
  margin-top: 3px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
`;
