import styled from "@emotion/styled";
import { FormControl, InputLabel, Select } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  position: relative;
  max-height: 50vh;
`;

export const StyledLabel = styled(InputLabel)`
  /* background-color: white; */
  /* padding: 0 0.5rem; */
  color: rgba(0, 0, 0, 0.5);
  /* margin-left: -0.25rem; */
`;

export const StyledSelect = styled(Select)`
  margin: 0 !important;
  color: rgba(0, 0, 0, 0.87);
  background: #f7f7f7;
  svg {
    right: 20px;
    top: 24px;
    path {
      fill: rgba(0, 0, 0, 0.45);
    }
  }
  fieldset {
    border: 0;
  }
  ::before,
  ::after {
    border-bottom: 0 !important;
  }
`;
