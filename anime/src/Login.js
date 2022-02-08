import React,{ useState } from 'react';
import "./Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

function Login() {
  
  const[registerEmail,setRegisterEmail] = useState("");
  const[registerPassword,setRegisterPassword] = useState("");

  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(auth , registerEmail , registerPassword);
    console.log(user);
    } catch(error){
      console.log(error.message);
    }
  };

  return (
    <div className='back'>
      <p className='name'>ANIME MAZE</p>
      <div className='login'>

        <div className='email'>
        <p>Email ID  : </p> 
        <input type="email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
        </div>
        
        <div className='password'>
          <p>Password :</p>
          <input type="password" onChange={(event) => {setRegisterPassword(event.target.value)}} />
        </div>

      </div>

      <p className='submit' onClick={register} >Submit</p>
      
      <div className='div'>
      <h3 className='tags'>User SignedIn!</h3>
      <h4>{auth.currentUser.email}</h4>
      </div>
    </div>
  )
}

export default Login
