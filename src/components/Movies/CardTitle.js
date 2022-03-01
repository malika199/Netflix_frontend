import React from "react";
import style from "styled-components";

/*---> Component <---*/
function CardTitle({ children, ...restProps }) {
  return <h1 className={style.Title}  {...restProps}>{children}</h1>;
}



export default CardTitle;
