import React from "react";
import style from "./FeatureSubTitleBrowse.module.scss";

const  FeatureSubTitleBrowse = ({ children, ...restProps }) => {
  return <h2 className={style.SubTitle}  {...restProps}>{children}</h2>;
}


export default FeatureSubTitleBrowse;
