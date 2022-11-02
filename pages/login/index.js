import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import cls from 'classnames'
import styles from './login.module.css'
import { RecaptchaVerifier } from "firebase/auth";
import { auth, signIn } from '../api/firebase'
export default function login() {
  const [number,setNumber] = useState('');
  const [solved, setsolved] = useState(false)
  const [verifier, setVerifier] = useState(null)
  const submitNumber = (  number) =>{
      solved ? 
      signIn(number, verifier)
      : console.log("recaptcha failed, refresh and start again")
    }
useEffect(()=>{
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container');
  setVerifier(Window.recaptchaVerifier)
  recaptchaVerifier.render();
},[])
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      
      <div className={cls(' h-[100vh] flex flex-col items-center',styles.bgImage)}>
        <div className={ cls('h-[100vh] pt-[10vh] flex flex-col items-center',styles.Wrapper) } >
          <div className={cls(' w-[50vw] h-[60vh] bg-black flex flex-col items-center ',styles.bg)}>
            <div>
              <img src="/static/logo.png" alt="" />
            </div>
            <input className=' h-[4vh] w-[20vw] p-[10px] mb-[4vh] border-2 border-rose-500 rounded-xl '  type="text" name="" placeholder='full name' />
            <input className=' h-[4vh] mb-[4vh] '  type="text" name="" placeholder='phone number' onChange={(e)=>{setNumber(e.target.value)}} />
            <div id='recaptcha-container'></div>
            <button className=' text-white ' type="submit" onClick={submitNumber(number)}>sendCode</button>
          </div>
        </div>
      </div>
    </div>
  )
}
