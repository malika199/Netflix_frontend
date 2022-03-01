import React from "react";
import style from "./OptFormEmail.module.scss";

/*---> Component <---*/
function OptFormEmail({ children, ...restProps }) {
  return (
    <input className={style.EmailInput}  placeholder="Email Address" {...restProps}>
      {children}
    </input>
  );
}


export default OptFormEmail;
