import React from 'react';
import Link from "next/link";
import style from './style/Footer.module.scss';

export default function Footer() {
    return (
    <div className={style.Container}>
        
        <p className={style.Text} > Questions ? Contact us. </p>
       
            <div className={style.Break}  />
            
               <div className={style.Row}>
            <div  className={style.Column} >
                <a  className={style.Link} href='#' >FAQ</a>
                <a  className={style.Link} href='#' >Investor Relations</a>
                <a  className={style.Link} href='#' >Ways to Watch</a>
                <a  className={style.Link} href='#' >Corporate Information</a>
                <a  className={style.Link} href='#' >Netflix Originals</a>  
            </div>
            <div  className={style.Column} >
                <a  className={style.Link} href='#' >Help Center</a>
                <a  className={style.Link} href='#' >Jobs</a>
                <a  className={style.Link} href='#' >Terms of Use</a>
                <a  className={style.Link} href='#' >Contact Us</a>  
            </div>

            <div  className={style.Column} >

                <a  className={style.Link} href='#' >Account</a>
                <a  className={style.Link} href='#' >Redeem Gift Cards</a>
                <a  className={style.Link} href='#' >Privacy</a>
                <a  className={style.Link} href='#'  >Speed Test</a>  
           
            </div>

            <div  className={style.Column} >
           
                <a  className={style.Link} href='#' >Media Center</a>
                <a  className={style.Link} href='#' >Ways to Watch</a>
                <a  className={style.Link} href='#' >Corporate Information</a>
                <a  className={style.Link} href='#' >Legal Notices</a>  

            </div>
    
     </div>
  
     <div className={style.Break}  />

     <p className={style.Text} >Nextflix United States</p>

    </div>
)
}
