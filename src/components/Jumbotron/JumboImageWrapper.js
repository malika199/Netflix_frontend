import React from "react";
import style from "./JumboImageWrapper.module.scss";

/*---> Component <---*/
function JumboImageWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}


export default JumboImageWrapper;
