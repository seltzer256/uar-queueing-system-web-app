import styled from "@emotion/styled";
import Slider from "react-slick";
import CustomImage from "../../components/custom-image/custom-image.component";
import { Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Section = styled.section`
  height: 100vh;
  max-height: 1200px;
  min-height: 600px;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled(Typography)`
  font-size: 5rem;
  line-height: 6.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light};
`;

export const Subtitle = styled(Typography)`
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.light};
`;

export const SliderWrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export const BgSlider = styled(Slider)``;

export const StyledImage = styled(CustomImage)`
  height: 100vh;
  max-height: 1200px;
  min-height: 600px;

  img {
    object-fit: cover !important;
  }
`;

export const BgFilter = styled.div`
  /* background-color: rgba(0, 0, 0, 0.23); */
  position: absolute;
  inset: 0;
  z-index: 2;
`;
