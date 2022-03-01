import React from "react";
import style from "./OptFormWrapper.module.scss";

/*---> Component <---*/
function OptFormWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default OptFormWrapper;
