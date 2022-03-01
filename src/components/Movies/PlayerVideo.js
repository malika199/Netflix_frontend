import React from "react";
import style from "./PlayerVideo.module.scss";

/*---> Component <---*/
function PlayerVideo({ children, ...restProps }) {
  return (
    <video className={style.Video} controls {...restProps}>
      <source {...restProps} />
    </video>
  );
}



export default PlayerVideo;
