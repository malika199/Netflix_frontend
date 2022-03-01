import React from "react";
import style from "./AllCardsWrapper.module.scss"
/*---> Component <---*/
function AllCardsWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper} {...restProps}>{children}</div>;
}



export default AllCardsWrapper;
