
import firebase from "firebase/compat/app";
import {GoogleAuthProvider,
  sendPasswordResetEmail,
  getAuth,signOut,signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,query,getDocs,
  collection, where, 
  addDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCBAyj8D0rhy6sJiWsYTtAXwlOK-MaQe6w",
  authDomain: "ticketing-system-62d9a.firebaseapp.com",
  projectId: "ticketing-system-62d9a",
  storageBucket: "ticketing-system-62d9a.appspot.com",
  messagingSenderId: "112850878709",
  appId: "1:112850878709:web:4c9f6bad88ab27355885bc",
  measurementId: "G-ZHX8T33KSC", };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app);
const Provider = new GoogleAuthProvider();





// const Google = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };


const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name:"displayName",
        authProvider: "local",
        email,
      });
    }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };



  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    Provider,
   
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,storage,
  };

