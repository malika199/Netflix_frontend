import React from "react";
import style from "./CardFeatureWrapper.module.scss";

/*---> Component <---*/
function CardFeatureWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default CardFeatureWrapper;
