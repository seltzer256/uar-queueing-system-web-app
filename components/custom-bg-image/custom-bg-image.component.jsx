import React from "react";
import PropTypes from "prop-types";
import * as S from "./custom-bg-image.styles";
import Image from "next/image";

const CustomBgImage = (props) => {
  const { img, tag, fallback, children, ...otherProps } = props;

  if (!img && !img.sourceUrl) {
    return <section {...props}>{children}</section>;
  }

  return (
    <S.Wrapper component={tag ? tag : "section"} {...otherProps}>
      {img && (
        <Image
          fill
          src={img?.sourceUrl ?? img}
          role="presentation"
          alt=""
          sizes="100%"
        />
      )}
      {children}
    </S.Wrapper>
  );
};

CustomBgImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  tag: PropTypes.string,
};

export default CustomBgImage;
