import React, { useState } from "react";
import { getMe, signIn, signUp, updateMe } from "../lib/uar-api-utils";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";
import { useRouter } from "next/router";
export const AccountContext = React.createContext();

const AccountProvider = (props) => {
  const router = useRouter();
  const [isAccountLoading, setIsAccountLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const isLoggedIn = !!userData;
  const isAvailable = userData?.isAvailable;
  const avatar = userData?.photo ?? "/assets/avatars/avatar_1.png";

  // console.log("userData :>> ", userData);
  const getUserData = async () => {
    const cookies = parseCookies();
    const token = cookies?.jwt;
    if (!token) return;

    setIsAccountLoading(true);
    const data = await getMe();
    // console.log("data :>> ", data);
    if (!data || data.status === "fail" || data.status === "error") {
      setIsAccountLoading(false);
      setUserData(null);
      destroyCookie(undefined, "jwt", {
        path: "/",
      });
      if (router.pathname === "/dashboard") {
        router.push("/login");
        return;
      }
      return;
    }
    setUserData({ ...data?.data?.users });
    setIsAccountLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSignIn = async (email, password) => {
    setIsAccountLoading(true);
    const res = await signIn(email, password);
    // console.log("res :>> ", res);
    if (res?.status === "success") {
      setUserData(res?.data?.user);
    }
    setIsAccountLoading(false);
    return res;
  };

  const handleSignUp = async (data) => {
    setIsAccountLoading(true);
    const res = await signUp(data);
    // console.log("res :>> ", res);
    if (res?.status === "success") {
      setUserData(res?.data?.user);
    }
    setIsAccountLoading(false);
    return res;
  };

  const handleLogout = async () => {
    setUserData(null);
    const newData = { ...userData, isAvailable: false };
    // console.log("newData :>> ", newData);
    await updateMe(newData);
    destroyCookie(undefined, "jwt", {
      path: "/",
    });
  };

  const handleChangeUserData = async (data) => {
    setIsAccountLoading(true);
    const newData = { ...userData, ...data };
    // console.log("newData :>> ", newData);
    const res = await updateMe(newData);
    // console.log("res :>> ", res);
    setUserData(res?.data?.user);
    setIsAccountLoading(false);
  };

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        handleSignIn,
        handleLogout,
        handleSignUp,
        userData,
        updateUser: handleChangeUserData,
        isAccountLoading,
        setIsAccountLoading,
        isAvailable,
        avatar,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
