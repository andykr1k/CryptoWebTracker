import * as React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Loader, Header, Footer, CryptoWatchlist } from './components';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <BrowserRouter>
      <div className='overscroll-none'>
        <div className='grid place-items-center h-screen'>

          <header className='fixed top-0 left-0 w-screen h-12'>
            <Header />
          </header>

          <CryptoWatchlist />

          <footer className='fixed bottom-0 left-0 w-screen h-12'>
            <Footer />
          </footer>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
