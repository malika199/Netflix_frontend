import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import style from "./AccordionBody.module.scss";

/*---> Component <---*/
function AccordionBody({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  return AccordionShow ? <div className={style.Wrapper}  {...restProps}>{children}</div> : null;
}



export default AccordionBody;
