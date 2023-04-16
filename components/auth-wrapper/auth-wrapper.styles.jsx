import styled from "@emotion/styled";
import { Typography } from "@mui/material";
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

export const Card = styled.div`
  background: ${({ theme }) => theme.palette.text.light};
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
`;
