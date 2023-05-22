import React, { useContext, useState } from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import * as S from "./header.styles.jsx";
import { AccountContext } from "../../context/account-provider.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useScrollTrigger } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component.jsx";
import { useRouter } from "next/router.js";

const Header = ({ hideLogin, hideRegister, staticNav }) => {
  const router = useRouter();
  const { isLoggedIn, handleLogout } = useContext(AccountContext);
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountMenuActive, setAccountMenuActive] = useState(false);

  const open = Boolean(anchorEl);

  const handleOpenAccMenu = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleCloseAccMenu = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleLogout();
    router.push("/");
  };

  return (
    <S.Header elevation={scrollTrigger || staticNav ? 4 : 0}>
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
              <S.AccountMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseAccMenu}
              >
                <S.AccountBox onClick={() => router.push("/perfil")}>
                  <S.AccountName>John Doe</S.AccountName>
                </S.AccountBox>
                <S.AccountBox onClick={() => router.push("/dashboard")}>
                  <S.AccountName>Dashboard</S.AccountName>
                </S.AccountBox>
                <S.AccountBox onClick={handleSignOut}>
                  <S.AccountLabel className="logout">Salir</S.AccountLabel>
                </S.AccountBox>
              </S.AccountMenu>
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
