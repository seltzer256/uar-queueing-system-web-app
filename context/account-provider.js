import React, { useState } from "react";
import { getMe, signIn, signUp } from "../lib/uar-api-utils";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";

export const AccountContext = React.createContext();

const AccountProvider = (props) => {
  const [isAccountLoading, setIsAccountLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  //   const [isAccountLoading, setIsAccountLoading] = useState(false);
  const isLoggedIn = !!userData;

  const getUserData = async () => {
    const cookies = parseCookies();
    const token = cookies?.jwt;
    const data = await getMe(token);
    // console.log("data :>> ", data);
    if (!data || data.status === "error") {
      setUserData(null);
      destroyCookie(undefined, "jwt", {
        path: "/",
      });
      return;
    }
    setUserData({ ...data?.data?.users });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSignIn = async (email, password) => {
    setIsAccountLoading(true);
    const res = await signIn(email, password);
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

  const handleLogout = () => {
    setUserData(null);
    destroyCookie(undefined, "jwt", {
      path: "/",
    });
  };

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        handleSignIn,
        handleLogout,
        handleSignUp,
        userData,
        isAccountLoading,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
