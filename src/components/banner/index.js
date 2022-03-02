import React from 'react';
import styles from "./banner.module.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Banner() {
    // const bannerStyle={
    //     backgroundImage:`url("https://static3.srcdn.com/wordpress/wp-content/uploads/2021/10/Squid-Game-and-Hunger-Games.jpg")`,
    //     backgroundSize: "Cover",
    //     backgroundPosition: "center center",
    // };
  return <headear className={styles.banner}
    // style={bannerStyle}
  >
      <div className={styles.banner__content}>
          <h1 className={styles.banner__title}>Squide game</h1>
          <p  className={styles.banner__description} >
            Des personnes en difficultés financières sont invitées à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants, mais avec des rebondissements mortels, elles risquent leur vie pour une grosse somme d argent.
            
          </p>
          <div className={styles.banner__buttons}>
              <button className={styles.banner__button}  banner_button--play> <PlayArrowIcon /> Lecture</button>
              <button className={styles.banner__button}> <HelpOutlineIcon/>Plus d infos</button>
          </div>
      </div>
  </headear>;
}

export default Banner;