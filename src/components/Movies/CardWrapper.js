import React from "react";
import style from "./CardWrapper.module.scss";

/*---> Component <---*/
function CardWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}


export default CardWrapper;
