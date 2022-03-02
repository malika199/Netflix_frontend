import React from "react";
import style from "./HeaderLink.module.scss";

/*---> Component <---*/
const HeaderLink = ({ children, ...restProps }) => {
  return (
    <div className={style.Wrapper} >
      <a {...restProps}>{children}</a>
    </div>
  );
}

 

export default HeaderLink;
