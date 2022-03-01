import React from "react";
import style from "./Logo.module.scss"


function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img  className={style.Image}  src="/images/misc/logo.svg" alt="Netflix logo" />
      </a>
    </div>
  );
}


export default Logo;
