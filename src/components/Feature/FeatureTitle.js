import React from "react";
import style from "./FeatureTitle.module.scss";

/*---> Component <---*/
function FeatureTitle({ children, ...restProps }) {
  return <h1 className={style.Title}  {...restProps}>{children}</h1>;
}


export default FeatureTitle;
