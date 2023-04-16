import React, { useState, useRef } from "react";
import * as S from "./home-hero.styles";
import { Box } from "@mui/material";

const HomeHero = ({ title, subtitle, sliderImages }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  let slider = useRef();

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  if (!sliderImages) return null;

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.TextWrapper>
        <S.BgFilter />
        <S.SliderWrapper>
          <S.BgSlider ref={(c) => (slider = c)} {...settings}>
            {sliderImages?.map((image, index) => (
              <Box key={`home-hero-${index}`}>
                <S.StyledImage img={image} alt={"Bimmer home hero"} />
              </Box>
            ))}
          </S.BgSlider>
        </S.SliderWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default HomeHero;
