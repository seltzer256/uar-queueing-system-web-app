import React from "react"

import * as S from "./spinner.styles"

const Spinner = props => (
  <S.Container className="loading-spinner" {...props}>
    <S.CustomSpinner />
  </S.Container>
)

export default Spinner
