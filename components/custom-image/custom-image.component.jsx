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
  ...props
}) => {
  if (!img && !img?.sourceUrl) return null;

  let imgAlt = alt;

  if (!imgAlt) {
    imgAlt = img.altText ?? img.title;
  }

  return (
    <S.Wrapper paddingpercentage={arPaddingPercentage} className={className}>
      <Image
        priority={priority}
        fill
        style={{ objectFit: fit }}
        sizes="100%"
        src={img?.sourceUrl ?? img}
        alt={imgAlt}
        {...props}
      />
    </S.Wrapper>
  );
};

CustomImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  layout: PropTypes.string,
  priority: PropTypes.string,
  arPaddingPercentage: PropTypes.number,
};

export default CustomImage;
