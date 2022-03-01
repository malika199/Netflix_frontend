import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import style from "./AccordionHeader.module.scss";


function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className={style.Wrapper}  onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img className={style.Image} 
          src="../images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img className={style.Image} 
          src="../images/icons/add.png"
          alt="Open"
        />
      )}
    </div>
  );
}



export default AccordionHeader;
