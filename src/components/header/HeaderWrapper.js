import React from "react";
import styled from "styled-components";
import style from "./HeaderWrapper.module.scss"
/*---> Component <---*/
function HeaderWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}   {...restProps}>{children}</div>;
}



export default HeaderWrapper;
