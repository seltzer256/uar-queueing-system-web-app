import styled from "@emotion/styled";
import { FormControl, Typography } from "@mui/material";

export const Wrapper = styled.div``;

export const Title = styled(Typography)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const StyledOptionGroup = styled(FormControl)`
  .MuiFormGroup-root {
    /* gap: 0rem; */
  }
  .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  /* .MuiFormControlLabel-label {
    font-size: 1.25rem;
    line-height: 2rem;
  } */
  .name {
    text-decoration: line-through;
  }
  .unavailable {
    margin-left: 1rem;
    color: ${({ theme }) => theme.palette.text.error};
  }
`;
