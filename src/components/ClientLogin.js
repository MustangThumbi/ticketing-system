
  import React, { useState } from 'react';
import '../Styles/ClientLogin.css' 
import { auth, Google, provider, registerWithEmailAndPassword } from "../Database/firebase";
// import {loggedIn} from '../Redux/reducers/userReducer'
import { useDispatch } from 'react-redux';
import { Button, Input, Modal } from '@mui/material';
import { logInWithEmailAndPassword } from '../Database/firebase';
import { userActions } from '../Redux/actions/userSlice';



function ClientLogin() {

// //\const navigate = useNavigate();
 // let navigate = useNavigate();
// const [{user}, dispatch] = useStateValue();
const dispatch =useDispatch()



// const signIn = () => {
//   auth
//     .signInWithPopup(provider)
//     .then((result) => {
//       dispatch({
//         type: user,
//         user: result.user,
//       });
//     })

//     .catch((error) => alert(error.messsage));
// };




// const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSignUp, setOpenSignUp]= useState("");
    const [open,setOpen]= useState(true)
    // const login = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //               // it successfully created a new user with email and password
            
    //               //  navigate("/homepage");
                
    //         })
            
    //         .catch(error => alert(error.message))
    // }

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

    const handleSubmit =(e) => {
      e.preventDefault();
      dispatch(userActions.loggedIn())
    }
  return (
    <div className="login">
       <Modal
     className='signup-modal'
  open={openSignUp}
  onClose={() =>setOpenSignUp(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
   <form className='signup-form'>
 <center> 
    <img className='signup-logo' src=" https://avatars.dicebear.com/api/human/:matiru5810.svg"/>
   </center>
   

   <Input
   placeholder="email"
   type="text"
   className='signup-input'
   value={email}
   onChange={(e)=> setEmail(e.target.value)}/>

   <Input
   placeholder="password"
   type="password"
   value={password}
    className='signup-input'
   onChange={(e)=> setPassword(e.target.value)}/>
   <Button className='signup-btn' type="submit" onClick={registerWithEmailAndPassword}>signup</Button>
   <Button className='google' type="submit" onClick={Google}>Google</Button>
</form>

  
  </Modal>

       <img
        className="login_logo "
        src=" https://avatars.dicebear.com/api/human/:matiru5810.svg"/>
    <h1> Welcome To Tickly</h1>
      <div className="login_container">
     <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          onClick={logInWithEmailAndPassword}
           type="submit" className="login_signIn_button">
        Sign In
          </button>
          <Button>Google</Button>
        
        </form>
        <p>Don't have an account? Click create!</p>
        <button 
       onClick={() =>setOpenSignUp(true)}
         className="login_signUp_button">
          create your Tickly Account 
        </button>
        
      </div>
    </div>
  );
}
export default ClientLogin;
