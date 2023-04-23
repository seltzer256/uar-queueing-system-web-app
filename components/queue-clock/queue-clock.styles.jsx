import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ClockWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.16);
  .clock {
  }
`;

export const Time = styled(Typography)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
