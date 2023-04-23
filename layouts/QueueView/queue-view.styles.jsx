import styled from "@emotion/styled";
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component";
import { Typography } from "@mui/material";
import "react-clock/dist/Clock.css";
import CustomLink from "../../components/custom-link/custom-link.component";

export const Section = styled(CustomBgImage)`
  flex: 1;
  padding: 3rem 0;
  > img {
    opacity: 0.35;
  }
  > .MuiContainer-root {
    position: relative;
  }
`;

export const ImageWrapper = styled(CustomLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  > div {
    max-width: 350px;
    display: flex;
  }
`;

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 5rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const ShiftTitle = styled(Typography)`
  font-size: 4rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
`;

export const Module = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 700;
`;
