import React from "react";
import PropTypes from "prop-types";
import * as S from "./custom-link.styles";
import { isBrowser } from "../../lib/utils";
import { useRouter } from "next/router";

const CustomLink = ({ url, children, className, ...otherProps }) => {
  const isFile = /\.[0-9a-z]+$/i.test(url);
  const router = useRouter();
  const isExternal = () => {
    if (!url || !isBrowser()) return false;
    const match = url.match(
      /^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
    );
    if (
      typeof match[1] === "string" &&
      match[1].length > 0 &&
      match[1].toLowerCase() !== location.protocol
    )
      return true;
    if (
      typeof match[2] === "string" &&
      match[2].length > 0 &&
      match[2].replace(
        new RegExp(
          ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
        ),
        ""
      ) !== location.host
    )
      return true;
    return false;
  };

  if (!isExternal()) {
    if (isFile) {
      return (
        <S.DefaultLink href={url} {...otherProps}>
          {children}
        </S.DefaultLink>
      );
    }
    return (
      <S.NextLink
        href={url ?? ""}
        passHref
        className={`${className} ${router.asPath === url ? "active" : ""}`}
        {...otherProps}
      >
        {children}
      </S.NextLink>
    );
  }

  return (
    <S.CustomRegularLink href={url} {...otherProps}>
      {children}
    </S.CustomRegularLink>
  );
};

CustomLink.propTypes = {
  url: PropTypes.string,
  target: PropTypes.string,
};

export default CustomLink;
