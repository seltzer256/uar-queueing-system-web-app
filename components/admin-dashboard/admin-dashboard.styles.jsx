import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CustomSelect from "../custom-select/custom-select.component";

export const Wrapper = styled.div``;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  margin: 1rem 0;
`;

export const StyledSelect = styled(CustomSelect)`
  .MuiInputBase-root {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.23);
    height: 56px;
  }
  .MuiSelect-select {
    padding: 15px 14px;
  }
  .MuiFormLabel-root {
    background-color: white;
    padding: 0 4px;
  }
  .MuiSelect-icon {
    top: 22px;
  }
  :hover {
    .MuiInputBase-root {
      border: 1px solid rgba(0, 0, 0, 0.87);
    }
  }
`;
