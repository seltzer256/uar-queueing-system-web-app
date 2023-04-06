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
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: -0.01em;
  //opacity: 0.5;
  width: 100%;
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.content};
    padding: 0;
    opacity: 0.5;
  }
  .MuiInputBase-root {
    padding-right: 0;
  }
  textarea {
    /* height: 150px !important; */
    overflow-y: auto !important;
  }

  /* .MuiOutlinedInput-root {
    border-radius: 250px;
  } */
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23);
  }

  .Mui-focused {
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;
    }
    &.Mui-error {
      fieldset {
        border-color: ${({ theme }) => theme.palette.primary.main} !important;
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
