import React from "react";
import style from "./CardImage.module.scss";

/*---> Component <---*/
function CardImage({ children, ...restProps }) {
  return <img className={style.Image} src={children} />;
}


export default CardImage;
