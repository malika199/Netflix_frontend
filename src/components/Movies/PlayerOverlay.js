import React from "react";
import style from "./PlayerOverlay.module.scss";

/*---> Component <---*/
function PlayerOverlay({ children, ...restProps }) {
  return <div className={style.Wrapper}  {...restProps}>{children}</div>;
}



export default PlayerOverlay;
