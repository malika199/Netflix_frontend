import React from "react";
import style from "./AccordionWrapper.module.scss";

/*---> Component <---*/
function AccordionWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default AccordionWrapper;
