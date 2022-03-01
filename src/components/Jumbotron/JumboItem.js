import React from "react";
import style from "./JumboItem.module.scss";

/*---> Component <---*/
function JumboItem({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default JumboItem;
