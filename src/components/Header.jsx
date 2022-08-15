import * as React from 'react'
import '../App.css'
import logo from '../assets/emoji.png'
import {Link} from 'react-router-dom'
import CryptoWatchlist from './CryptoWatchlist'
import { motion } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <header class="shadow-sm bg-white bg-opacity-10">
    <div class="max-w-screen-xl p-4 mx-auto">
      <div class="flex items-center justify-between space-x-4 lg:space-x-10">
        <div class="flex lg:w-0 lg:flex-1">
          <img className='w-16 mr-auto' src={logo} />
        </div>
  
        <div class="items-center justify-end flex-1 hidden space-x-4 md:flex">
          <a
            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
            href="/"
          >
            Home
          </a>
  
          <a
            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
            href="/watchlist"
          >
            Explore
          </a>

          <a
            class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
            href="/getstarted"
          >
            Get Started
          </a>
        </div>
        { isOpen ? 
            <div className='flex space-x-2'>
              <a className='text-white align-baseline bg-black bg-opacity-5 rounded p-2' href='/'>Home</a>
              <a className='text-white align-baseline bg-black bg-opacity-5 rounded p-2' href='/watchlist'>Watchlist</a>
              <a className='text-white align-baseline bg-black bg-opacity-5 rounded p-2' href='/profile'>Profile</a>
            </div>
          :
            <div className='hidden'></div>
          }
        <div class="md:hidden">
          <button class="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggling}
            >
              <path
                d="M4 4h12M4 10h12M4 16h12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;