import React from 'react';
import style from "./BrowseHeaderWrapper.module.scss";

/*---> Component <---*/
function BrowseHeaderWrapper({ children, ...restProps }) {
    return <div  Wrapper {...restProps}>{children}</div>;
  }


  
  
 
  
  export default BrowseHeaderWrapper;
  