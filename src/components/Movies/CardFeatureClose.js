import React from "react";
import style from "./CardFeatureClose.module.scss";

/*---> Component <---*/
function CardFeatureClose({ children, ...restProps }) {
  return (
    <button className={style.Button}  type="button" {...restProps}>
      {children}
      <img src="../images/icons/close.png" alt="Close" />
    </button>
  );
}



export default CardFeatureClose;
