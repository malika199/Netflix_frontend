import React from "react";
import Link from "next/link";
import style from './SigninButton.module.scss'
/*---> Component <---*/
function SigninButton({ children, ...restProps }) {
  return (
    <div>
      <Link href="/login" {...restProps}>
       <a className={style.Link}> {children} </a>
      </Link>
    </div>
  );
}

/*---> Styles <---*/
  

export default SigninButton;
