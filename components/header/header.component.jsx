import React, { useContext, useState } from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import * as S from "./header.styles.jsx";
import { AccountContext } from "../../context/account-provider.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useScrollTrigger } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component.jsx";
import { useRouter } from "next/router.js";

const Header = ({ hideLogin, staticNav }) => {
  const router = useRouter();
  const {
    isLoggedIn,
    handleLogout,
    isAvailable,
    updateUser,
    avatar,
    userData,
  } = useContext(AccountContext);
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // console.log("userData :>> ", userData);
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleChangeAvailable = async () => {
    await updateUser({
      isAvailable: !isAvailable,
    });
    // setAccountMenuActive(!accountMenuActive);
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
                <S.AccountAvatar img={avatar} alt="avatar" />
                <ArrowDropDownIcon />
              </S.AccountWrapper>
              <S.AccountMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseAccMenu}
              >
                <S.AccountBox onClick={() => router.push("/perfil")}>
                  <S.AccountName>{userData?.name}</S.AccountName>
                </S.AccountBox>
                <S.AccountBox onClick={handleChangeAvailable}>
                  <S.AccountName>Disponible</S.AccountName>
                  <S.StyledCheckBox checked={isAvailable} />
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
              {!hideLogin && (
                <CustomButton href="/login">Ingresar</CustomButton>
              )}
            </>
          )}
        </S.RightWrapper>
      </S.Wrapper>
    </S.Header>
  );
};
export default Header;
