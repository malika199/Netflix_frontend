import React from "react";
import style from "./BrowseNavbar.module.scss";

/*---> Component <---*/
function BrowseNavbar({ children, ...restProps }) {
  return <nav className={style.Wrapper}  {...restProps}>{children}</nav>;
}



export default BrowseNavbar;
