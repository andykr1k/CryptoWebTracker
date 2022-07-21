import * as React from 'react';
import { Loader, Header, Footer, CryptoWatchlist, SignInPage, CoinInfo, Coin, HomePage, ContactPage } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  //const [user] = React.useState(false);
  //const [signedIn] = React.useState(false);

  return (
      <div className=''>
        <div className='sticky top-0 z-50'>
          <Header />
        </div>
        <div className='grid place-items-center min-h-screen '>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/watchlist' element={<CryptoWatchlist />} />
          <Route path='/coin' element={<Coin />} />
            <Route path=':coinname' element={<Coin />} />
          <Route path='/getstarted' element={<SignInPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        </div>
      <Footer />
      </div>
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

export function addToFavorites(){

}

export function removeFromFavorites(){
  
}

export default App
