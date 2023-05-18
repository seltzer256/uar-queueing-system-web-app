import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  navHeight: 101,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Poppins, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#00713D",
      light: "#1D871A",
      dark: "#0B6706",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#6A82AE",
      light: "#EDEDF4",
      dark: "#61656B",
    },
    tertiary: {
      main: "#2C13BD",
      light: "#5C4BBD",
      dark: "#1A0B70",
    },
    text: {
      primary: "#050100",
      secondary: "#00713D",
      content: "#000000",
      tertiary: "#A1ACB3",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
      error: "#D32F2F",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Poppins", "Arial", sans-serif`,
  },
});

export default theme;
