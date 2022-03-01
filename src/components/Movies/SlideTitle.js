import React from "react";
import style from "./SlideTitle.module.scss";

/*---> Component <---*/
function SlideTitle({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default SlideTitle;
