import React, { useState } from "react";

export const AccountContext = React.createContext();

const AccountProvider = (props) => {
  const [userData, setUserData] = useState(null);
  //   const [isAccountLoading, setIsAccountLoading] = useState(false);
  const isLoggedIn = !!userData;

  //   const handleCustomerCreation = async (customerData) => {
  //     if (!isLoggedIn) {
  //       const data = await createUserAccount(customerData);
  //       if (data && data.id) {
  //         await handleSignIn({
  //           username: customerData.email,
  //           password: customerData.password,
  //         });
  //         return data;
  //       }
  //     }
  //   };

  const handleSignIn = async (data) => {
    setUserData({ isLoggedIn: true });
  };

  const handleLogout = async (data) => {
    setUserData({ isLoggedIn: true });
  };

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        handleSignIn,
        handleLogout,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
