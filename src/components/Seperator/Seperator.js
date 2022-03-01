import React from "react";
import style from "./Seperator.module.scss";

/*---> Component <---*/
function Seperator({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default Seperator;
