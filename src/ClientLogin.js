
  import React, { useState } from 'react';
import './ClientLogin.css' 
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";

import { Redirect } from "react-router-dom";


function ClientLogin() {

// //\const navigate = useNavigate();
 // let navigate = useNavigate();
const [{user}, dispatch] = useStateValue();


const signIn = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    })

    .catch((error) => alert(error.messsage));
};




// const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                  // it successfully created a new user with email and password
            
                  //  navigate("/homepage");
                
            })
            
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                     
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
       <img
        className="login_logo "
        src=" https://avatars.dicebear.com/api/human/:matiru5810.svg"/>
    <h1> Welcome To Tickly</h1>
      <div className="login_container">
     <h1>Sign In</h1>
        <form>
           <h5>Email</h5>
       <input
             value={email}
             onChange={(event) => setEmail (event.target.value)}
            type="email"
          />
       <h5>Password</h5>
          
          <input
            value={password}
            onChange={(event) => setPassword  (event.target.value)}
            type="password"
          />
        
          <button 
          onClick={login}
           type="submit" className="login_signIn_button">
        Sign In
          </button>
        
        </form>
        <p>Don't have an account? Click create!</p>
        <button 
        onClick={register}
         className="login_signUp_button">
          create your Tickly Account 
        </button>
        
      </div>
    </div>
  );
}
export default ClientLogin;
