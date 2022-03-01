import React, { useState } from "react";

import style from "./browse.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Navbar from '../../components/Header/Navbar';
import Logo from '../../components/Header/Logo';
import SigninButton from "../../components/Header/SigninButton";
import Footer from "../../components/footer";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "../../components/banner";
import Headermenu from "../../components/HeaderMenu";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3131/netflix/films/getFilms');
  const data  = await res.json();
  return{
    props: {films : data }
  }
}

function MyListPage({films}) {

 
  return ( 
  <>
 
        <Headermenu/>
        <Banner/>
  
  <div className={style.contain}>

  
    <div className={style.row__inner}>
    <div className={style.slides} >


      {films.map( (film) => {
        return (
          // <SwiperSlide  >
        <div key={film?.iswish===true}  className={style.tile}>
         <div className={style.tile__media}>
            <img className={style.tile__img} src={film?.img} alt=""  />
          </div>
          <div className={style.tile__details}>
            <div className={style.tile__title}>
            {film?.title}     
            {film?.iswish}
              {/* <i className={style.i} >  */}
              <div className={style.icons}>
              {/* <PlayArrow className={style.icon} />
              <Add className={style.icon}   onClick={() =>{ film?.isWish == "true" }} />
              <ThumbUpAltOutlined className={style.icon} />
              <ThumbDownOutlined className={style.icon} /> */}
            </div>
              
               {/* </i> */}

            </div>    

          </div>
        </div> 
        // </SwiperSlide>
        );
   } )  } 
 
    </div>
    </div>
 



    </div>

  <Footer/>
  </>
   
   );
}

export default MyListPage;
