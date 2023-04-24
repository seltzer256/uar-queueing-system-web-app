import React from "react";
import * as S from "./service-item.styles";
import HelpIcon from "@mui/icons-material/Help";

const ServiceItem = ({ name, ...others }) => {
  return (
    <S.Wrapper {...others}>
      <S.Name className="name">{name}</S.Name>
      <HelpIcon />
    </S.Wrapper>
  );
};

export default ServiceItem;
