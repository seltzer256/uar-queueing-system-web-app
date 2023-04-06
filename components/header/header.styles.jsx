import styled from "@emotion/styled";
import { AppBar, Container, Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";
import CustomImage from "../custom-image/custom-image.component";
import CustomLink from "../custom-link/custom-link.component";

export const Header = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 1.5rem 0;
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(CustomLink)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.palette.text.content};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AccountButton = styled(CustomButton)`
  font-weight: 500;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: 1rem;
  line-height: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5rem 1.375rem;
  }
`;

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const AccountAvatar = styled(CustomImage)`
  max-width: 32px;
`;

export const AccountMenu = styled.div`
  background: ${({ theme }) => theme.palette.secondary.light};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 40px 64px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  width: auto;
  left: -90px;
  top: 40px;
`;

export const AccountName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.15px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const AccountBox = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &.bottom {
    padding: 0.5rem 1rem;
  }
  :last-of-type {
    border-bottom: 0;
  }
`;

export const AccountLabel = styled(Typography)`
  font-size: 0.875rem;
  line-height: 100%;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  &.logout {
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.content};
  }
`;

export const AccountLink = styled(CustomLink)`
  font-size: 0.875rem;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  display: block;
`;
