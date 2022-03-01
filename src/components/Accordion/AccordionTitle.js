import React from "react";
import style from "./AccordionTitle.module.scss";

/*---> Component <---*/
function AccordionTitle({ children, ...restProps }) {
  return <h1 className={style.Title}  {...restProps}>{children}</h1>;
}



export default AccordionTitle;
