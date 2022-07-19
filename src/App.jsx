import * as React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Loader, Header, Footer, CryptoWatchlist } from './components';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from "framer-motion";
import './App.css'

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
