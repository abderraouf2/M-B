import React, { Component } from 'react';
import Head from 'next/head'
import cls from 'classnames'
import styles from './login.module.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db, addUser } from '../api/firebase'

import { doc, setDoc, getDoc } from "firebase/firestore";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      phoneNumber : null, 
      otp : null,
      show : false
    }
  }
  componentDidMount() {
    
  }
 
  render() {
    const submitNumber = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }, auth);
      console.log("sending otp");
      recaptchaVerifier.render();
      signInWithPhoneNumber(auth, this.state.phoneNumber, window.recaptchaVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
      }).catch((error) => {
        
      });
      this.setState({show : true})
    }
    const verifyOTP = () => {
      confirmationResult.confirm(this.state.otp).then( async (result) => {
        
        const user = result.user;
        addUser(this.state.name, this.state.phoneNumber, user)
        
      }).catch((error) => {
        alert("otp error")
      });
    }
    const inputStyle = " h-[5vh] mb-[4vh] p-[5px] bg-transparent border-b-2 border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-slate-300  duration-100 text-white"
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
              <input className={inputStyle}  type="text" name="" placeholder='full name' onChange={(e)=>{this.setState({name : e.target.value})}} />

              <div className={ cls( 'flex items-center flex-col' ,this.state.show ? 'hidden' : '') } >
              <input className={inputStyle}  type="text" name="" placeholder='phone number' onChange={(e)=>{this.setState({phoneNumber : e.target.value})}} />
                <div id='recaptcha-container'></div>
                <button className=' text-white ' type="submit" onClick={submitNumber}>sendCode</button>
              </div>

              <div className={ cls( 'flex items-center flex-col' ,!this.state.show ? 'hidden' : '') }>
                <input className={inputStyle}  type="text" name="" placeholder='enter OTP' onChange={(e)=>{this.setState({otp : e.target.value})}} />
                <button className=' text-white ' type="submit" onClick={verifyOTP}>verify OTP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default login;