import React, { useState } from "react";
import * as S from "./auth-wrapper.styles";
import { getPhraseOfTheDay } from "../../lib/utils";

const AuthWrapper = ({ children }) => {
  const [phrase, setPhrase] = useState("");

  const handleGetPhrase = async () => {
    const res = await getPhraseOfTheDay();
    console.log("res :>> ", res);
  };
  return (
    <S.Wrapper>
      <S.BgImage
        img="/assets/images/home_4.jpg"
        alt="BMW M5"
        priority={true}
        arPaddingPercentage={40}
      />
      <S.Card>
        <S.StyledBox>
          <S.Title>Sistema de Colas - UAR</S.Title>
          <S.Subtitle>{phrase}</S.Subtitle>
          {children}
        </S.StyledBox>
      </S.Card>
    </S.Wrapper>
  );
};

export default AuthWrapper;
