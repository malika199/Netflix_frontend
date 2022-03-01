import React from "react";
import style from "./JumboWrapper.module.scss";

/*---> Component <---*/
function JumboWrapper({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}


export default JumboWrapper;
