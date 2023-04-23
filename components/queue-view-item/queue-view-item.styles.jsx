import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.text.light};
  transition: box-shadow 0.3s ease-in-out;
  display: block;
  height: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 0.75rem 0.75rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const LeftWrapper = styled.div`
  padding: 1rem 1.5rem;
`;

export const RightWrapper = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Name = styled(Typography)`
  font-weight: 500;
  font-size: 3rem;
  line-height: 4rem;
`;

export const Module = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 500;
  font-size: 3rem;
  line-height: 4rem;
  text-align: end;
`;
