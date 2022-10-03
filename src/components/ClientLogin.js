
  import React, { useEffect, useState } from 'react';
import '../Styles/ClientLogin.css' 
import { auth, db, Google, provider, registerWithEmailAndPassword } from "../Database/firebase";
// import {loggedIn} from '../Redux/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux';
import { addDoc,collection } from "firebase/firestore";
import { Button, Input, Modal } from '@mui/material';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { logInWithEmailAndPassword } from '../Database/firebase';
import { selectUser, setActiveUser, setUserLogOutState } from '../Redux/reducers/userSlice';



function ClientLogin() {
  const [openSignUp, setOpenSignUp]= useState("");
  const [password,setPassword]=useState("");
 
  const [email, setEmail] = useState("");
  const [username,setUsername]=useState("");
  const dispatch = useDispatch();
 
  // const setUsername =dispatch(setActiveUser);
  // const userEmail= useSelector(selectUserEmail)
  const user= useSelector(selectUser)

//signing in function
const signIn= async(event)=>{
  event.preventDefault();

   try {
    await signInWithEmailAndPassword(auth, email, password).then
    ((result)=>{
      dispatch(setActiveUser({
        userEmail:result.user.email,
        userName:result.user.displayName,
      }))
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
    
};
    //signup function
  const signup=async(event)=>{
    event.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName:username})
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username:user.displayName,
        authProvider: "local",
        email,


        
      })
     
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
      setOpenSignUp(false);
      setUsername("")
  };

  //fires to check if signed in or not
  useEffect(()=>{
    
   
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser);
        dispatch(setActiveUser({ 
          userName:authUser.displayName,
          userEmail:authUser.email,
        })
        );
       
   
      }else{
        dispatch(setUserLogOutState())
      }
    })
    
    return()=>{
      unsubscribe();
      
     
    }
   },[dispatch]);
   
   
   
  
   
   
    const handleSub =(e)=>{
     e.preventDefault();
     dispatch(selectUser)
   
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
   placeholder="username"
   type="text"
   className='signup-input'
   value={username}
   onChange={(e)=> setUsername(e.target.value)}/>

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
   <Button className='signup-btn' type="submit" onClick={signup}>signup</Button>
   <Button className='google' type="submit" >Google</Button>
</form>

  
  </Modal>

       <img
        className="login_logo "
        src=" https://avatars.dicebear.com/api/human/:matiru5810.svg"/>
    <h1> Welcome To Tickly</h1>
      <div className="login_container">
     <h1>Sign In</h1>
        <form onSubmit={handleSub}>
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
          onClick={signIn}
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
        {/* testing and stuff */}
      </div>
    </div>
  );
}
export default ClientLogin;
