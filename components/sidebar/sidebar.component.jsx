import React from "react";
import * as S from "./sidebar.styles";
import { SIDEBAR_ITEMS } from "../../lib/constants";

const Sidebar = () => {
  return (
    <S.Wrapper>
      {Object.values(SIDEBAR_ITEMS).map(({ name, value, icon }, index) => (
        <S.Tab></S.Tab>
      ))}
    </S.Wrapper>
  );
};

export default Sidebar;
