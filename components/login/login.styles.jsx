import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";
import CustomImage from "../custom-image/custom-image.component";
import CustomLink from "../custom-link/custom-link.component";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.palette.secondary.light};
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

export const StyledBox = styled.div`
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

export const ForgotPassword = styled(CustomLink)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem("13")};
  line-height: 1.375rem;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.38);
  margin-top: 0.25rem;
  margin-bottom: 2.25rem;
`;

export const LoginWithBtn = styled(CustomButton)`
  width: 100%;
  gap: 0.75rem;
  text-transform: uppercase;
`;
