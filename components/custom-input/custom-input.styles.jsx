import { TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const InputContainer = styled.div`
  width: 100%;
`;

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const CustomInput = styled(TextField)`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  width: 100%;
  .MuiInputLabel-root {
    color: rgba(0, 0, 0, 0.87);
    padding: 0;
    opacity: 0.6;
  }
  input {
    color: ${({ theme }) => theme.palette.text.content};
  }
  .MuiOutlinedInput-root {
    background: #f7f7f7;
  }
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  textarea {
    height: 100px !important;
    color: rgba(0, 0, 0, 0.87);
    overflow-y: auto !important;
  }

  .Mui-focused {
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;
    }
    &.Mui-error {
      fieldset {
        border-color: ${({ theme }) => theme.palette.text.error} !important;
      }
    }
  }
  legend {
    position: relative;
    > span {
      padding-right: 0.75rem;
    }
  }
`;
