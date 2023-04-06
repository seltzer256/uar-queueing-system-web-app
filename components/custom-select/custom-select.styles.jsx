import styled from "@emotion/styled";
import { FormControl, InputLabel, NativeSelect, Select } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  position: relative;
  .MuiOutlinedInput-input {
    /* padding-left: 1.45rem; */
  }
  fieldset {
    border-color: black;
  }
  max-height: 50vh;
`;

export const StyledLabel = styled(InputLabel)`
  /* background-color: white; */
  /* padding: 0 0.5rem; */
  color: rgba(0, 0, 0, 0.5);
  /* margin-left: -0.25rem; */
`;

export const StyledSelect = styled(NativeSelect)`
  border-radius: 4px !important;
  margin: 0 !important;
  background: rgba(0, 0, 0, 0.06);
  :hover {
    background: rgba(0, 0, 0, 0.09);
  }
  select {
    padding: 1.5rem 0.75rem 0.5rem 0.75rem;
  }
  svg {
    right: 16px;
    top: 24px;
    path {
      fill: rgba(0, 0, 0, 0.54);
    }
  }
`;
