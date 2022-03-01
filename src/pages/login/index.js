import React, {useEffect, useState} from 'react';

import style from './loginForm.module.scss';

import authService from "../../services/auth.service";

import { useRouter } from "next/router";
import HeaderWrapper from '../../components/Header/HeaderWrapper';
import Navbar from '../../components/Header/Navbar';
import Logo from '../../components/Header/Logo';
import Link from 'next/link';

function SigninForm(){

  const router = useRouter();
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            console.log(data);
            if (data.message) {
              return false;
            }else{
            localStorage.setItem("token", data.token);
            router.push("/browse");
          }
           
          })
          .catch((err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message);
          });
    }
    return(
        <>
      <HeaderWrapper>
        <Navbar>
          <Logo/>
        </Navbar>
        <form className={style.SignFormWrapper}  method="POST" onSubmit={(e) => handleSubmit(e)}>
        
        
            <div className={style.Form}  >

            <h1 className={style.SignFormTitle} > Sign In </h1>
           
            {/* <div className={style.Wrapper} ></div> */}

            {error ? <div className={style.Wrapper} >{error} </div>: null} 
            
            <input 
            className={style.FormInput}
              type="text"
              placeholder="Email Address"
              onChange={(e) => {
                setUser({...user, email:e.target.value})
            }}
            />

            <input 
              className={style.FormInput}
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setUser({...user, password:e.target.value})
            }}
            />
            
            <button type="submit" className={style.Button} 
            // disabled={IsInvalid}
             >Sign In</button>
           
           
            <p className={style.SignFormText} >
            New to Netflix?
          
              <Link href="/register"><a className={style.SignFormLink} > Sign up now. </a></Link>   
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

export default SigninForm;