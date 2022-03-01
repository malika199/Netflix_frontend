import React from "react";
import style from "./SlideWrapper.module.scss";

/*---> Component <---*/
function SlideWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}

export default SlideWrapper;
