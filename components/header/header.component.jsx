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
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountMenuActive, setAccountMenuActive] = useState(false);

  const open = Boolean(anchorEl);

  const handleOpenAccMenu = (evt) => {
    console.log("evt :>> ", evt);
    setAnchorEl(evt.currentTarget);
  };

  const handleCloseAccMenu = () => {
    setAnchorEl(null);
  };

  return (
    <S.Header elevation={scrollTrigger ? 4 : 0}>
      <S.Wrapper>
        <S.LogoWrapper url="/" className="logo-image">
          <CustomImage img="/assets/images/espe.png" alt="Espe Logo" />
        </S.LogoWrapper>
        <S.RightWrapper>
          {isLoggedIn ? (
            <div>
              <S.AccountWrapper onClick={handleOpenAccMenu}>
                <S.AccountAvatar
                  img="/assets/avatars/avatar_1.png"
                  alt="avatar"
                />
                <ArrowDropDownIcon />
              </S.AccountWrapper>
              {isLoggedIn && (
                <S.AccountMenu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseAccMenu}
                >
                  <S.AccountBox>
                    <S.AccountName>John Doe</S.AccountName>
                  </S.AccountBox>
                  {/* <S.AccountBox>
                    <S.AccountLink url="/profile">Perfil</S.AccountLink>
                  </S.AccountBox> */}
                  <S.AccountBox onClick={() => handleLogout()}>
                    <S.AccountLabel className="logout">Salir</S.AccountLabel>
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
            </div>
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
