import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";

export const Wrapper = styled.div`
  margin-left: 0.75rem;
`;

export const StyledControlLabel = styled(FormControlLabel)`
  svg {
    color: #1c1c1c;
  }
  &.MuiFormControlLabel-root {
    align-items: center;
  }
  .MuiFormControlLabel-label {
    margin-top: 2px;
  }
`;
