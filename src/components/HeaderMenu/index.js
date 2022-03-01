import React from 'react';
import Link from 'next/link';
import styles from "./HeaderMenu.module.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

const Headermenu = () => {
    return(
        <div className={styles.navbar}>
   
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link href="/browse" className={styles.link}>
            <span>Homepage</span>
          </Link>
         
          <Link href="/browse" className={styles.link}>
            <span className={styles.navbarmainLinks}>Movies</span>
          </Link>
        
          <Link href="/mylist" className={styles.link}>
          <span>My List</span>
          </Link>
        </div>
        <div className={styles.right}>
          <Search className={styles.icon} />
          <span>KID</span>
          <Notifications className={styles.icon} />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className={styles.profile}>
            <ArrowDropDown className={styles.icon} />
            <div className={styles.options}>
              <span>Settings</span>
              <span >Logout</span>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  );
};
export default Headermenu;