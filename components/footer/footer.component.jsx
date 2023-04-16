import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import * as S from "./footer.styles";
import { Box } from "@mui/material";

const Footer = ({ className }) => {
  return (
    <S.Footer className={className}>
      <S.Wrapper>
        <Box>
          <S.Title>Desarrollado por</S.Title>
          <S.Author>Henry Fuérez</S.Author>
          <S.SocialWrapper>
            <S.SocialBtn href="https://www.facebook.com/henry.fuerez/">
              <FacebookIcon />
            </S.SocialBtn>
            <S.SocialBtn href="mailto:henry83266@gmail.com">
              <EmailIcon />
            </S.SocialBtn>
            <S.SocialBtn href="tel:593978972500">
              <WhatsAppIcon />
            </S.SocialBtn>
          </S.SocialWrapper>
        </Box>
        <S.Copyright>
          {" "}
          © Copyright UAR - ESPE {new Date().getFullYear()}
        </S.Copyright>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
