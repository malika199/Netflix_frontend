import React from "react";
import style from "./JumboImage.module.scss";

/*---> Component <---*/
function JumboImage({ children, ...restProps }) {
  return <img  src= {children}className={style.Image}   {...restProps}  />;
}


export default JumboImage;
