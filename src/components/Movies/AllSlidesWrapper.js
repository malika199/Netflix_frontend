import React from "react";
import style from "./AllSlidesWrapper.module.scss";
/*---> Component <---*/
function AllSlidesWrapper({ children, ...restProps }) {
  return <div className= {style.Wrapper} {...restProps}>{children}</div>;
}


export default AllSlidesWrapper;
