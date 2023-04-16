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
      light: "#00DB75",
      dark: "#032e19",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#6A82AE",
      light: "#90959E",
      dark: "#61656B",
    },
    tertiary: {
      main: "#2C13BD",
      light: "#5C4BBD",
      dark: "#1A0B70",
    },
    text: {
      primary: "#050100",
      secondary: "#FFFFE6",
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
