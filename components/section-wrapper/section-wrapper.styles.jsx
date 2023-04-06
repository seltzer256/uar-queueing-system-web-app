import styled from "@emotion/styled";

const getBgColor = (color, theme) => {
  switch (color) {
    case "main":
    case "light":
    case "dark":
      return `background-color: ${theme.palette.primary[color]}; color: white`;
    case "gray":
      return `background-color: #f2f0ec`;
    case "secondary":
      return `background-color: ${theme.palette.secondary.main};`;
  }
};

export const Wrapper = styled.section`
  position: relative;
  ${({ theme }) => theme.sectionPadding};
  // color: ${({ theme }) => theme.palette.text.primary};
  ${({ bg, theme }) => (bg ? getBgColor(bg, theme) : "")};
`;
