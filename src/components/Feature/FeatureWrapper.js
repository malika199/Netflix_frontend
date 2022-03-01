import React from "react";
import style from "./FeatureWrapper.module.scss";

/*---> Component <---*/
function FeatureWrapper({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}


export default FeatureWrapper;
