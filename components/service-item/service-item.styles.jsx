import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.text.light};
  transition: all 0.3s ease-in-out;
  display: block;
  min-height: 104px;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: rgb(0 0 0 / 20%) 0px 0.25rem 0.75rem;
  :hover,
  &.active {
    box-shadow: rgb(0 0 0 / 20%) 0.5rem 1rem 0.75rem;
    background-color: ${({ theme }) => theme.palette.primary.main};
    .name {
      color: ${({ theme }) => theme.palette.text.light};
    }
  }
  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.palette.text.light};
  }
`;

export const Name = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.25rem;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
