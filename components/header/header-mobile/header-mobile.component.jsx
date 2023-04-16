import { Fade } from "@mui/material";
import React from "react";
import * as S from "./header-mobile.styles";

const HeaderMobile = ({ isActiveMenu, items }) => {
  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit>
      <S.HeaderMobile>
        <S.LinksWrapper>
          {items.map(({ url, title }, index) => (
            <S.Link url={url} key={`mobile-links-${index}`}>
              {title}
            </S.Link>
          ))}
        </S.LinksWrapper>
        <S.LoginRegisterBox>
          <S.Link url="/login">Login</S.Link>/
          <S.Link url="/register">Register</S.Link>
        </S.LoginRegisterBox>
      </S.HeaderMobile>
    </Fade>
  );
};

export default HeaderMobile;
