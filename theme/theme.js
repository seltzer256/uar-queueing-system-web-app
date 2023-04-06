import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  navHeight: 90,
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
      main: "#1976D2",
      light: "#FFFFFF",
      dark: "#64748B",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#EEEEEE",
      light: "#FFFFFF",
      dark: "#9E9E9E",
    },
    tertiary: {
      main: "#E9E9E9",
      light: "#FAFAFA",
      dark: "#757575",
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
      content: "#000000",
      tertiary: "#1A2933",
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
