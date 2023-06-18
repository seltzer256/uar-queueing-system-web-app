import styled from "@emotion/styled";
import { Container, IconButton, Typography } from "@mui/material";

export const Footer = styled.footer`
  color: white;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
`;

export const Author = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
  font-style: italic;
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialBtn = styled(IconButton)`
  border-radius: 50%;
  /* background-color: ${({ theme }) => theme.palette.secondary.light}; */
  svg {
    color: ${({ theme }) => theme.palette.text.light};
    transition: color 0.3s ease-in-out;
  }
  :hover {
    background: ${({ theme }) => theme.palette.text.light};
    svg {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

export const Copyright = styled(Typography)`
  font-size: 0.75rem;
  line-height: 1rem;
`;
