import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { Loader, Header, Footer } from './components'
import './App.css'

function App() {
  
  return (
    <div className='overscroll-none'>
      <div className='grid place-items-center h-screen'>

        <header className='fixed top-0 left-0 w-screen h-12'>
          <Header />
        </header>

        <Loader />

        <footer className='fixed bottom-0 left-0 w-screen h-12'>
          <Footer />
        </footer>

      </div>

    </div>
  )
}

export default App
