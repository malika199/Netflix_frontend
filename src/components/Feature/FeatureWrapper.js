import React from "react";
import style from "./FeatureWrapper.module.scss";

/*---> Component <---*/
const FeatureWrapper = ({ children, ...restProps }) => {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}


export default FeatureWrapper;
