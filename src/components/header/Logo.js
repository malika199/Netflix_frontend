import Link from "next/link";
import React from "react";
import style from "./Logo.module.scss"


function Logo({ children, ...restProps }) {
  return (
    <div>
      <Link href="/" >
      <a {...restProps} >
        {children}
        <img  className={style.Image}  src="/images/misc/logo.svg" alt="Netflix logo" />
      </a>
      </Link>
    </div>
  );
}


export default Logo;
