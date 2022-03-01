import React from "react";
import style from "./CardDescription.module.scss";

/*---> Component <---*/
function CardDescription({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default CardDescription;
