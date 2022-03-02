import React, { useEffect, useState } from 'react';
import style from './register.module.scss';

import { useRouter } from "next/router";

import authService from "../../services/auth.service";


import HeaderWrapper from '../../components/Header/HeaderWrapper';
import Navbar from '../../components/Header/Navbar';
import Logo from '../../components/Header/Logo';
import Link from 'next/link';

const Index = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(user)
          .then((data) => {
            console.log(data);
            if (data.message) {
              setError(true);
              setErrorMessage(data.message);
              return false;
            }
            console.log('c est un nouveau user ', data)
            localStorage.setItem("token", data.token);
            router.push("/checkout");
          })
          .catch((err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message)
          });
      };


    return(
      
      <>
           <HeaderWrapper>
        <Navbar>
          <Logo/>
        </Navbar>
        <form className={style.SignFormWrapper} method="POST" onSubmit={(e) => handleSubmit(e)}>
        
        
        <div className={style.Form}   >

            <h1 className={style.SignFormTitle} > Sign Up </h1>

            {error ? <div className={style.Wrapper} >{error} </div>: null} 

            <input 
            className={style.FormInput}
              type="text"
              placeholder="Nom"
              required={true}
              onChange={(e) => {
                setUser({ ...user, nom: e.target.value });
              }}
            />

            
            <input 
            className={style.FormInput}
              type="text"
              placeholder="Email Address"
              required={true}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />

            <input 
              className={style.FormInput}
              type="password"
              placeholder="Password"
              autoComplete="off"
              required={true}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />

            <button className={style.Button} 
             type="submit"
            // disabled={IsInvalid}
             >Sign up </button>
   
            <p className={style.SignFormText} >
                
                Already a user?
          
              <Link href="/login" className={style.SignFormLink} >  Sign in now. </Link> 
            </p>


        <p className={style.Text} >
           
            This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
        </p>

        </div>
        
        </form>
        </HeaderWrapper>

        </>
    )

}

export default Index;