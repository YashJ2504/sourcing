import React, { useEffect, useState } from 'react';
import { login, register } from '../api';
import { useRouter } from 'next/router';
import Script from 'next/script'


export default function Create() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [company,setCompany] = useState("");
    const [loginError,setLoginError] = useState("");
    const [registerError,setRegisterError] = useState("");
    const router = useRouter();


    const handleLogin = async() => {
      const values = {
        email,
        password
      };
      await login(values).then(function (res) {
        if (res && res.status == 200) {
          console.log(res.data.token);
          localStorage.setItem("token",res.data.token);
          router.push({
            pathname: '/search'
          });
          
        } else {
          console.log(res);
          setLoginError(res.data.error);
          
        }
      })
    } 

    const handleRegister = async() => {
      const values = {
        company,
        email,
        password,
      };
      await register(values).then(function (res) {
        if (res && res.status == 200) {
          console.log(res.data.token);
          localStorage.setItem("token",res.data.token);
          router.push({
            pathname: '/search'
          });
          
        } else {
          console.log(res);
          setRegisterError(res.data.error);
          
        }
      })
    } 

    return (
        <>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
        <Script src="/assets/js/login_page.js" />
        <div style={{ fontFamily: "'Open Sans', Helvetica, Arial, sans-serif", backgroundUmage: "url('/assets/images/bg9.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Log-in &amp; Sign-up Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
        <style dangerouslySetInnerHTML={{ __html: "\n    *, *:before, *:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  background-image: url('/assets/images/bg9.jpeg');\n  background-repeat: no-repeat;\nbackground-size: cover;\n}\n\ninput, button {\n  border: none;\n  outline: none;\n  background: none;\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n}\n.tip {\n  font-size: 20px;\n  margin: 40px auto 50px;\n  text-align: center;\n}\n\n#errorMsg{\n  text-shadow: pink;\n  text-justify: right;\n  color: rgb(231, 30, 194);\n  font-family:  Helvetica, Arial, sans-serif;\n  font-size: 8px;\n}\n\n.logo{\n  width:200px;\n  height:90px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cont {  \n  overflow: hidden;\n  width: 900px;\n  height: 550px;\n  background: #fff;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  right: 20%;\n  transform: translate(0, -50%);\n}\n.form {\n  position: relative;\n  width: 640px;\n  height: 100%;\n  transition: transform 1.2s ease-in-out;\n  padding: 50px 30px 0;\n}\n.sub-cont {\n  overflow: hidden;\n  position: absolute;\n  left: 640px;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  padding-left: 260px;\n  background: #fff;\n  transition: transform 1.2s ease-in-out;\n}\n.cont.s--signup .sub-cont {\n  transform: translate3d(-640px, 0, 0);\n}\nbutton {\n  display: block;\n  margin: 0 auto;\n  width: 260px;\n  height: 36px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n.img {\n  overflow: hidden;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 260px;\n  height: 100%;\n  padding-top: 360px;\n}\n.img:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  background-image: url('/assets/images/services-image-04.jpg');\n  background-size: cover;\n  transition: transform 1.2s ease-in-out;\n}\n.img:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n.cont.s--signup .img:before {\n  transform: translate3d(640px, 0, 0);\n}\n.img__text {\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 50px;\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n  color: #fff;\n  transition: transform 1.2s ease-in-out;\n}\n.img__text h2 {\n  margin-bottom: 10px;\n  font-weight: normal;\n}\n.img__text p {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.cont.s--signup .img__text.m--up {\n  transform: translateX(520px);\n}\n.img__text.m--in {\n  transform: translateX(-520px);\n}\n.cont.s--signup .img__text.m--in {\n  transform: translateX(0);\n}\n.img__btn {\n  overflow: hidden;\n  z-index: 2;\n  position: relative;\n  width: 100px;\n  height: 36px;\n  margin: 0 auto;\n  background: transparent;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n}\n.img__btn:after {\n  content: '';\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px solid #fff;\n  border-radius: 30px;\n}\n.img__btn span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: transform 1.2s;\n}\n.img__btn span.m--in {\n  transform: translateY(-72px);\n}\n.cont.s--signup .img__btn span.m--in {\n  transform: translateY(0);\n}\n.cont.s--signup .img__btn span.m--up {\n  transform: translateY(72px);\n}\nh2 {\n  width: 100%;\n  font-size: 26px;\n  text-align: center;\n}\nlabel {\n  display: block;\n  width: 260px;\n  margin: 25px auto 0;\n  text-align: center;\n}\nlabel span {\n  font-size: 12px;\n  color: #cfcfcf;\n  text-transform: uppercase;\n}\ninput {\n  display: block;\n  width: 100%;\n  margin-top: 5px;\n  padding-bottom: 5px;\n  font-size: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  text-align: center;\n}\n.forgot-pass {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 12px;\n  color: #cfcfcf;\n}\n.submit {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  background: #47B5EC;\n  text-transform: uppercase;\n}\n.fb-btn {\n  border: 2px solid #d3dae9;\n  color: #8fa1c7;\n}\n.fb-btn span {\n  font-weight: bold;\n  color: #455a81;\n}\n.sign-in {\n  transition-timing-function: ease-out;\n}\n.cont.s--signup .sign-in {\n  transition-timing-function: ease-in-out;\n  transition-duration: 1.2s;\n  transform: translate3d(640px, 0, 0);\n}\n.sign-up {\n  transform: translate3d(-900px, 0, 0);\n}\n.cont.s--signup .sign-up {\n  transform: translate3d(0, 0, 0);\n}\n.icon-link {\n  position: absolute;\n  left: 5px;\n  bottom: 5px;\n  width: 32px;\n}\n.icon-link img {\n  width: 100%;\n  vertical-align: top;\n}\n.icon-link--twitter {\n  left: auto;\n  right: 5px;\n}\n\n \n.container {\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n}\n\n#phone, .btn {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.btn {\n  color: #ffffff;\n  background-color: #428BCA;\n  border-color: #357EBD;\n  font-size: 14px;\n  outline: none;\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn:focus, .btn:hover {\n  background-color: #3276B1;\n  border-color: #285E8E;\n}\n\n.btn:active {\n  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n}\n\n.alert {\n  padding: 15px;\n  margin-top: 10px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert-info {\n  border-color: #bce8f1;\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\n.alert-error {\n  color: #a94442;\n  background-color: #f2dede;\n  text-align-last: center;\n  border-color: #ebccd1;\n}\n" }} />
        <p className="tip" />
        <div className="cont">
          <div className="form sign-in">
            <img className="logo" src="/assets/images/sourcing-logo.jpeg" alt="logo " />
            <h2>Welcome!</h2>

            <label>
              <span>Email*</span>
              <input type="email" id="signin_email" onChange={e => setEmail(e.target.value)} value={email} required />
            </label>
            <label>
              <span>Password*</span>
              <input type="password" id="signin_password" onChange={e => setPassword(e.target.value)} value={password} required />
            </label>

            <p className="forgot-pass"> <a className="forgot-pass" href="./forgot_password.html">Forgot password?</a> </p>

            <p className='alert-error'> {loginError} </p>
            <button onClick={handleLogin} className="submit">Sign In</button>

          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h2>New here?</h2>
                <p>Register to experience the power of finding best candidates for your open roles!</p>
              </div>
              <div className="img__text m--in">
                <h2>One of us?</h2>
                <p>If you already have an account, just sign in!</p>
              </div>
              <div className="img__btn">
                <span className="m--up">Register</span>
                <span className="m--in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <img className="logo" src="../assets/images/sourcing-logo.jpeg" alt="logo " />
              <h2>Register with us Today!!</h2>
              
                <label>
                  <span>Email*</span>
                  <input type="email" id="signup_name" onChange={e => setEmail(e.target.value)} value={email} required />
                </label>
                <label>
                  <span>Password*</span>
                  <input type="password" id="signup_email" onChange={e => setPassword(e.target.value)} value={password} required />
                </label>
                <label>
                  <span>Company*</span>
                  <input type="company" id="company" onChange={e => setCompany(e.target.value)} value={company} required />
                </label>
                <p className='alert-error'> {registerError} </p>
                <button  onClick={handleRegister} className="submit">Register</button>

              
            </div>
          </div>
        </div>
        {/*  */}
      </div></>
        
    )
}