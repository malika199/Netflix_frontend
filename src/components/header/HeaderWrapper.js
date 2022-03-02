import React from "react";
import style from "./HeaderWrapper.module.scss"

const HeaderWrapper = () => {
  return <div className={style.Wrapper}   {...restProps}>{children}</div>;
}



export default HeaderWrapper;
