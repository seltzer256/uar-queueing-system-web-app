import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

const styledLink = () => css`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

export const DefaultLink = styled.a`
  ${styledLink()};
`;

export const CustomRegularLink = styled.a`
  ${styledLink()};
`;

export const NextLink = styled(Link)`
  ${styledLink()};
`;
