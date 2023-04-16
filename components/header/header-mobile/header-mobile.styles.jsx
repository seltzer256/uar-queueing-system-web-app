import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomLink from "../../custom-link/custom-link.component";

export const HeaderMobile = styled(Box)`
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 1.5rem 1rem 4rem 1rem;
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: calc(${({ theme }) => theme.navHeight}px - 2px);
  left: 0;
  right: 0;
  bottom: 0;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }
`;

export const LinksWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(CustomLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 500;
  font-size: 2rem;
  line-height: 38px;
  /* padding-bottom: 2rem; */
  width: 100%;
  display: block;
  transition: color 0.3s ease-in-out;
  &.subitem {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    /* opacity: 0.8; */
    :last-child {
      margin-bottom: 0;
    }
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  span {
    display: flex;
    align-items: center;
  }
`;

export const LoginRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  a {
    width: auto;
  }
`;
