import styled from "@emotion/styled";
import { FormControlLabel, Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";
import CustomImage from "../custom-image/custom-image.component";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.palette.text.light};
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BgImage = styled(CustomImage)`
  position: absolute;
  inset: 0;
  bottom: unset;
  img {
    object-fit: cover !important;
  }
`;

export const Card = styled.form`
  background: ${({ theme }) => theme.palette.secondary.light};
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;
  padding: 4rem 3rem;
  margin: 5rem 0;
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const StyledBox = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.items {
    gap: 1rem;
  }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled(Typography)`
  font-size: 0.875rem;
  line-height: 143%;
  letter-spacing: 0.17px;
  max-width: 565px;
  text-align: center;
  margin-bottom: 3rem;
`;

export const LoginWithBtn = styled(CustomButton)`
  width: 100%;
  gap: 0.75rem;
  text-transform: uppercase;
`;

export const StyledFormLabel = styled(FormControlLabel)`
  align-self: flex-start;
  margin-left: 0;
  .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.6);
  }
  .Mui-checked {
    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.palette.text.content};
    }
  }
  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
