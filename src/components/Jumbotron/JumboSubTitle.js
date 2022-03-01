import React from "react";
import style from "./JumboSubTitle.module.scss";

/*---> Component <---*/
function JumboSubTitle({ children, ...restProps }) {
  return <h2 className={style.SubTitle}  {...restProps}>{children}</h2>;
}



export default JumboSubTitle;
