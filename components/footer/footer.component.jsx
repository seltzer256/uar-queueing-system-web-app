import React from "react";

import * as S from "./footer.styles";

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <div> © Copyright ESPE {new Date().getFullYear()}</div>
    </S.Wrapper>
  );
};

export default Footer;
