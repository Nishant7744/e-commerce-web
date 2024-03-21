import React from 'react';
import './CSS/LoginSignup.css';
import { useState } from 'react';

const LoginSignup = () => {

  const[state,setState]=useState("Login");
  const[form_Data,setFormData]=useState({

    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({...form_Data,[e.target.name]:e.target.value})
  }

  const login =async ()=>{

    console.log("Login function executed",form_Data);

    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',

      },
      body: JSON.stringify(form_Data),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    
    if(responseData.success)
    {
      localStorage.setItem('auth-token',responseData.toen);
      window.location.replace("/");
    }
    else
    {
      alert(responseData.error)
    }
  }

  const signup =async ()=>{

    console.log("Signup function executed",form_Data);

    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',

      },
      body: JSON.stringify(form_Data),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    
    if(responseData.success)
    {
      localStorage.setItem('auth-token',responseData.toen);
      window.location.replace("/");
    }
    else
    {
      alert(responseData.error)
    }
  }

  return (
    <div className='loginsignup' data-aos="fade-down"  >
      
      <div className="loginsignup-container">
        
        <h2>{state}</h2>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={form_Data.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={form_Data.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={form_Data.password} onChange={changeHandler} type="password" placeholder='password' />
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

          {state==="Sign Up"? <p className="loginsignup-login">Already have an account <span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className="loginsignup-login">Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}

          
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to terms of use & privacy policy.</p>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default LoginSignup;
