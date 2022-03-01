import React from "react";
import style from "./JumboTitle.module.scss";

/*---> Component <---*/
function JumboTitle({ children, ...restProps }) {
  return <h1 className={style.Title}  {...restProps}>{children}</h1>;
}

 

export default JumboTitle;
