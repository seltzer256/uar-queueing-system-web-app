import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Global } from "@emotion/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";
import { GlobalStyles } from "../styles/app.styles";
import theme from "../theme/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import AccountProvider from "../context/account-provider";
import "dayjs/locale/es";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  let navHeight = theme.navHeight;
  let sectionPadding = theme.sectionPadding;

  if (isMd) {
    navHeight = theme.navHeight;
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;";
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
        <EmotionThemeProvider theme={{ ...theme, navHeight, sectionPadding }}>
          <AccountProvider>
            <CssBaseline />
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
          </AccountProvider>
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
