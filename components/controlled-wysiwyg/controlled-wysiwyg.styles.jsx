import styled from "@emotion/styled";
import { InputLabel, Typography } from "@mui/material";

export const Wrapper = styled.div`
  .sun-editor {
    .se-wrapper {
      .se-wrapper-wysiwyg,
      .se-wrapper-code {
        min-height: 300px;
        max-height: 600px;
      }
    }
    .se-toolbar {
      background: #f5f5f5;
    }
  }
`;

export const StyledLabel = styled(InputLabel)`
  margin-left: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
`;
