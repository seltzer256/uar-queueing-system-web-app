import styled from "@emotion/styled";
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import { Typography } from "@mui/material";
import CustomLink from "../../components/custom-link/custom-link.component";
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component";

export const BgImage = styled(CustomBgImage)`
  img {
    object-fit: cover;
    z-index: 2;
  }
`;

export const Section = styled(SectionWrapper)`
  background-color: #fafafb;
  > .MuiContainer-root {
    position: relative;
    z-index: 2;
  }
`;

export const Title = styled(Typography)`
  font-size: 3.5rem;
  line-height: 5rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const ServiceCard = styled(CustomLink)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 63, 0.08);
  }
`;

export const ServiceTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ServiceDescription = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ServiceImg = styled.div`
  width: 60px;
  height: 60px;
`;
