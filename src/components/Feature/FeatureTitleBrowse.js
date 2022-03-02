import React from "react";
import style from "./FeatureTitleBrowse.module.scss";

/*---> Component <---*/
const FeatureTitleBrowse = ({ children, ...restProps }) => {
  return <h1 className={style.Title}  {...restProps}>{children}</h1>;
}


export default FeatureTitleBrowse;
