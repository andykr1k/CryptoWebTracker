import * as React from 'react';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfUXVtjtV5qT_84UrKomJeTMgMteC4wZE",
    authDomain: "cryptowebtracker.firebaseapp.com",
    databaseURL: "https://cryptowebtracker-default-rtdb.firebaseio.com",
    projectId: "cryptowebtracker",
    storageBucket: "cryptowebtracker.appspot.com",
    messagingSenderId: "759397487409",
    appId: "1:759397487409:web:3ba44829222476e2f05610",
    measurementId: "G-G7J4429VNJ"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

  export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <motion.div whileHover={{scale: 1.2}} className='bg-black m-2 p-5 bg-opacity-10 rounded-md'>
        <button className='text-white' onClick={signInWithGoogle}>Sign In With Google</button>
      </motion.div>
    )
  }
  
  function SignOut() {
    return auth.currentUser && (
      <div class='signingout'>
        <motion.div whileHover={{scale: 1.2}} className='absolute top-10 left-0 bg-black m-5 mt-7 p-2 bg-opacity-10 rounded-md visible md:invisible'>
        <img className='text-white' src={logoutLogo} onClick={() => auth.signOut()}/>
      </motion.div>
      <motion.div whileHover={{scale: 1.2}} className='flex absolute bottom-0 right-0  bg-black m-5 p-2 bg-opacity-10 rounded-md invisible md:visible'>
        <button className='text-white' onClick={() => auth.signOut()}>Sign Out</button>
      </motion.div>
      </div>
  
    )
  }