import styled from "@emotion/styled";
import CustomBgImage from "../custom-bg-image/custom-bg-image.component";
import CustomLink from "../custom-link/custom-link.component";
import { FormControl, Typography } from "@mui/material";
import CustomButton from "../custom-button/custom-button.component";

export const Section = styled(CustomBgImage)`
  flex: 1;
  padding: 3rem 0;
  display: flex;
  > img {
    opacity: 0.25;
  }
  > .MuiContainer-root {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 4.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled(CustomLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  > div {
    max-width: 350px;
    display: flex;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const CurrentService = styled.div`
  background-color: ${({ theme }) => theme.palette.text.light};
  padding: 2rem 3rem;
  max-height: 60vh;
  overflow: auto;
  box-shadow: 2px 2px 20px rgba(0, 0, 63, 0.12);
  border-radius: 8px;
  p,
  h1,
  h2,
  h3 {
    margin: 1rem 0;
    font-size: 2rem;
    line-height: 3rem;
  }
  h1,
  h2,
  h3 {
    font-weight: 700;
  }
  li {
    margin: 1rem 0;
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
  p,
  h1,
  h2,
  h3 {
    :first-of-type {
      margin-top: 0;
    }
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledBtn = styled(CustomButton)`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 700;
`;

export const StyledOptionGroup = styled(FormControl)`
  .MuiFormGroup-root {
    gap: 0.75rem;
  }
  .MuiSvgIcon-root {
    width: 36px;
    height: 36px;
  }
  .MuiFormControlLabel-label {
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
`;
