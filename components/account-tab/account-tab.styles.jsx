import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";
import CustomImage from "../custom-image/custom-image.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomSelect from "../custom-select/custom-select.component";

export const FormWrapper = styled.form`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: 4rem;
`;

export const Title = styled(Typography)`
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.15px;
`;

export const Description = styled(Typography)`
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.palette.secondary.dark};
  margin-top: 0.75rem;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &.inputs {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledInput = styled(CustomInput)`
  textarea {
    height: 100px !important;
  }
`;

StyledInput.defaultProps = {
  variant: "filled",
};

export const StyledButton = styled(CustomButton)`
  margin-top: 1.5rem;
`;

export const StyledSelect = styled(CustomSelect)``;

export const DeleteButton = styled(CustomButton)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  margin-bottom: auto;
  background: ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.text.error};
  border: 1px solid rgba(211, 47, 47, 0.5);
  :hover {
    background: ${({ theme }) => theme.palette.text.error} !important;
    color: ${({ theme }) => theme.palette.secondary.light};
    svg {
      path {
        fill: ${({ theme }) => theme.palette.secondary.light};
      }
    }
  }
`;

export const ChangePassBtn = styled(CustomButton)`
  white-space: nowrap;
  height: 100%;
  color: rgba(0, 0, 0, 0.26);
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.26);
  :hover {
    color: ${({ theme }) => theme.palette.text.light};
    background: rgba(0, 0, 0, 0.26) !important;
    border: 1px solid rgba(0, 0, 0, 0.03);
  }
`;

export const SwitchWrapper = styled.div`
  .MuiFormControlLabel-root {
    margin-left: 0;
  }
  .MuiFormControlLabel-label {
    line-height: 100%;
    letter-spacing: 0.15px;
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const SwitchTitle = styled(Typography)`
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const UploadImageWrapper = styled.div`
  margin-top: 3.5rem;
  display: flex;
  gap: 1.5rem;
`;

export const ImageThumbnail = styled(CustomImage)`
  width: 74px;
  height: 74px;
`;

export const ButtonsWrapper = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MaxFileSize = styled(Typography)`
  line-height: 100%;
  letter-spacing: 0.15px;
  margin-top: 0.5rem;
  /* color: #424242; */
`;
