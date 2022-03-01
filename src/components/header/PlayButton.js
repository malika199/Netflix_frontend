import React from "react";
import style from "./PlayButton.module.scss"
const PlayButton= (props) => {
  return (
    <input className={style.PlayButton} 
    type="button" 
    value={props.value}  
  />
  );
}



export default PlayButton;
