import React from "react";
import style from "./OptFormButton.module.scss";

/*---> Component <---*/
function OptFormButton({ children, ...restProps }) {
  return (
    <div className={style.Wrapper}>
      <a href="/signup" {...restProps}>
        {children}
        <img src="../images/icons/chevron-right.png" alt="Try Now" />
      </a>
    </div>
  );
}



export default OptFormButton;
