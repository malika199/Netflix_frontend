import React from "react";
import style from "./OptFormText.module.scss";

/*---> Component <---*/
function OptFormText({ children, ...restProps }) {
  return <p className={style.Text}  {...restProps}>{children}</p>;
}



export default OptFormText;
