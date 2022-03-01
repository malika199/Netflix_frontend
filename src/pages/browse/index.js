import React, { useState } from "react";

import style from "./browse.module.scss"

import Footer from "../../components/footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "../../components/banner";
import Headermenu from "../../components/HeaderMenu";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined,} from "@material-ui/icons";
  

  export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3131/netflix/films/getFilms');
    const data  = await res.json(); 
  
    // const resCat =  fetch('http://localhost:3131/netflix/films/getFilmsByCategorie/action');
    // const dataCat = resCat.json();
   
    return{
      props: {films : data  },
     
      // props: {filmsCat :dataCat}
    }
  }

  
function BrowsePage({films ,filmsCat}) {
  
  const [selected, setSelected] = useState("");
  
 
 
  let categories = ['documentaire', 'romantique', 'comique', 'action'];
 

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    console.log(selected);
  };
  
  return ( 
  <>
 
        <Headermenu/>
        

        <Banner/>
  
  <div className={style.contain}>
     
    <div className={style.categorie}>
      <h3   className={style.title} > categorie </h3>

        <select className={style.select} onChange={changeSelectOptionHandler}>

      {categories.map( (categorie) => {    
        return (  
          <option key={categorie}   >{categorie}</option>
        );        
 
      } )  }
    </select>
      
     
    </div>

   <h3 className={style.title}> les filmes de netflix </h3>
    <div className={style.row__inner}>
    <div className={style.slides} >

      {films.map( (film) => {
        return (
          // <SwiperSlide  >
        <div key={film?._id}  className={style.tile}>
         <div className={style.tile__media}>
            <img className={style.tile__img} src={film?.img} alt=""  />
          </div>
          <div className={style.tile__details}>
            <div className={style.tile__title}>
            {film?.title}     
            
              {/* <i className={style.i} >  */}
              <div className={style.icons}>
              <PlayArrow className={style.icon} />
              <Add className={style.icon}   onClick={() =>{ film?.iswish == true }} />
              <ThumbUpAltOutlined className={style.icon} />
              <ThumbDownOutlined className={style.icon} />
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

    if (selected !== null) {
      
   
  //   <div className={style.row__inner}>
  //   <div className={style.slides} >

  //     {filmsCat.map( (filmCat) => {
  //       return (
  //       <div key={filmCat?._id}  className={style.tile}>
  //        <div className={style.tile__media}>
  //           <img className={style.tile__img} src={filmCat?.img} alt=""  />
  //         </div>
  //         <div className={style.tile__details}>
  //           <div className={style.tile__title}>
  //           {filmCat?.title}     
            
  //             <div className={style.icons}>
  //             <PlayArrow className={style.icon} />
  //             <Add className={style.icon}   onClick={() =>{ filmCat?.iswish == true }} />
  //             <ThumbUpAltOutlined className={style.icon} />
  //             <ThumbDownOutlined className={style.icon} />
  //           </div>
              

  //           </div>    

  //         </div>
  //       </div> 
  //       );
  //  } )  } 
 
  //   </div>
  //   </div>
  }

 

   
    </div>



  <Footer/>
  </>
   
   );
}

export default BrowsePage;
