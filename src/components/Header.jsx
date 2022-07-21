import * as React from 'react'
import '../App.css'
import logo from '../assets/emoji.png'
import {Link} from 'react-router-dom'
import CryptoWatchlist from './CryptoWatchlist'
import { motion } from 'framer-motion'

function Header() {
  return (
    <div class="flex items-center justify-between p-3">
        <img className='float-left w-10' src={logo}/>
        <div className='float-right flex'>
        <Link to="/" element={<CryptoWatchlist />}>
          <motion.h1 whileHover={{scale:1.2}} className='mr-3 align-middle'>Home</motion.h1>
        </Link>
        <Link to="/watchlist" element={<CryptoWatchlist />}>
          <motion.h1 whileHover={{scale:1.2}} className='mr-3 align-middle'>Watchlist</motion.h1>
        </Link>
        <h1 className='align-middle'>Profile</h1>
        </div>
    </div>
  )
}

export default Header;