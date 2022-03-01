import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function JumpoTextWrapper({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

/*---> Styles <---*/
// export const Wrapper = styled.div`
// `;

export default JumpoTextWrapper;
