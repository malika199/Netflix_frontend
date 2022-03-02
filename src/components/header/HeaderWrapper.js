import React from "react";
import style from "./HeaderWrapper.module.scss"

const HeaderWrapper = ({ children, ...restProps }) => {
  return <div className={style.Wrapper}   {...restProps}>{children}</div>;
}



export default HeaderWrapper;
