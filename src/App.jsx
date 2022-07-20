import * as React from 'react';
import { Loader, Header, Footer, CryptoWatchlist, SignInPage } from './components';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from "framer-motion";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './App.css'

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
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const auth = firebase.auth();
//const firestore = firebase.firestore();

function App() {
  //const [user] = useAuthState(auth);
  const [user] = React.useState(false);

  return (
    <BrowserRouter>
      <div className='overscroll-none'>
          { user ? 
            <div className='grid place-items-center h-screen'>

            <header className='fixed top-0 left-0 w-screen h-12'>
              <Header />
            </header>

            <CryptoWatchlist />

            <footer className='fixed bottom-0 left-0 w-screen h-12'>
              <Footer />
            </footer>
          </div>
          : 
          <div className='grid place-items-center h-screen'>
          <h1 className='font-extrabold text-6xl mt-5'> Welcome </h1>
            <SignInPage /> 
            <div className='mb-5'>
              <SignIn />
            </div>
          </div>
        }
      </div>
    </BrowserRouter>
  )
}

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

export function SignOut() {
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

export default App
