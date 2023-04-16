import React, { useContext, useState } from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import * as S from "./header.styles.jsx";
import { AccountContext } from "../../context/account-provider.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, useScrollTrigger } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component.jsx";

const Header = ({ hideLogin, hideRegister }) => {
  const { isLoggedIn, handleLogout } = useContext(AccountContext);
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const [accountMenuActive, setAccountMenuActive] = useState(false);

  return (
    <S.Header elevation={scrollTrigger ? 4 : 0}>
      <S.Wrapper>
        <S.LogoWrapper url="/" className="logo-image">
          <CustomImage img="/assets/images/espe.png" alt="Espe Logo" />
        </S.LogoWrapper>
        <S.RightWrapper>
          {isLoggedIn ? (
            <Box style={{ position: "relative" }}>
              <S.AccountWrapper
                onClick={() => setAccountMenuActive(!accountMenuActive)}
              >
                <S.AccountAvatar img="/assets/images/avatar.png" />
                <ArrowDropDownIcon />
              </S.AccountWrapper>
              {accountMenuActive && (
                <S.AccountMenu>
                  <S.AccountBox>
                    <S.AccountName>John Doe</S.AccountName>
                    <S.AccountLink url="/profile">View Profile</S.AccountLink>
                  </S.AccountBox>
                  <S.AccountBox>
                    <S.AccountLabel style={{ marginBottom: "10px" }}>
                      Threads: 05
                    </S.AccountLabel>
                    <S.AccountLabel>Post: 50</S.AccountLabel>
                  </S.AccountBox>
                  <S.AccountBox
                    className="bottom"
                    onClick={() => handleLogout()}
                  >
                    <S.AccountLabel className="logout">Log out</S.AccountLabel>
                  </S.AccountBox>
                  <S.AccountBox className="bottom">
                    <S.AccountLabel
                      style={{ whiteSpace: "nowrap", fontSize: "10px" }}
                    >
                      Last session: Aug 20, 2022; 14:02pm
                    </S.AccountLabel>
                  </S.AccountBox>
                </S.AccountMenu>
              )}
            </Box>
          ) : (
            <>
              {!hideRegister && (
                <CustomButton href="/register">Registrarse</CustomButton>
              )}
              {!hideLogin && (
                <CustomButton className="light" href="/login">
                  Ingresar
                </CustomButton>
              )}
            </>
          )}
        </S.RightWrapper>
      </S.Wrapper>
    </S.Header>
  );
};
export default Header;
