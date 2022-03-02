import React from 'react';
import style from "./BrowseHeaderWrapper.module.scss";

/*---> Component <---*/
const  BrowseHeaderWrapper = ({ children, ...restProps }) => {
    return <div  Wrapper {...restProps}>{children}</div>;
  }


  
  
 
  
  export default BrowseHeaderWrapper;
  