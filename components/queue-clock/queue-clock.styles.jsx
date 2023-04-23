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
  .react-clock__face {
    border: 0;
  }
  .react-clock__mark__number {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 500;
  }
  .react-clock__hand__body {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .circle {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 0, 0);
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    border-radius: 50%;
    background: linear-gradient(to bottom, #fff, #000);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Time = styled(Typography)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
