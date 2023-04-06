import { gql } from "@apollo/client";

const MiscContentFragment = gql`
  fragment MiscContent on Page_Pagebuilder_Layouts_MiscContent {
    containerMaxWidth
    content
    fieldGroupName
  }
`;

export default MiscContentFragment;
