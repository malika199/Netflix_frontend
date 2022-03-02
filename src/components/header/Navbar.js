import React from "react";
import style from "./Navbar.module.scss";

/*---> Component <---*/
const Navbar = ({ children, ...restProps })=> {
  return <nav className={style.Wrapper}  {...restProps}>{children}</nav>;
}



export default Navbar;
