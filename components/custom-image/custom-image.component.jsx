import React from "react";
import PropTypes from "prop-types";
import * as S from "./custom-image.styles";
import Image from "next/image";

const CustomImage = ({
  img,
  alt,
  className,
  placeholderStyle,
  arPaddingPercentage,
  priority = false,
  withFallback = false,
  fit = "contain",
  sizes = "99vw",
  ...props
}) => {
  if (!img && !img?.sourceUrl) return null;

  let imgAlt = alt;

  if (!imgAlt) {
    imgAlt = img.altText ? img.altText : img.title;
  }

  return (
    <S.Wrapper paddingpercentage={arPaddingPercentage} className={className}>
      <Image
        sizes={sizes}
        fill
        priority={priority}
        style={{ objectFit: fit }}
        src={img?.sourceUrl ?? img}
        alt={imgAlt}
        {...props}
      />
    </S.Wrapper>
  );
};

CustomImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sizes: PropTypes.string,
  layout: PropTypes.string,
  priority: PropTypes.bool,
  arPaddingPercentage: PropTypes.number,
  fit: PropTypes.string,
};

export default CustomImage;
