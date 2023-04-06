import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 2rem;
  line-height: 100%;
  color: ${({ theme }) => theme.palette.text.content};
  margin-bottom: 2rem;
`;

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
