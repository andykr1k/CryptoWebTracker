import * as React from 'react'
import '../App.css'
import logo from '../assets/emoji.png'

function Header() {
  return (
    <div class="flex items-center justify-between p-3">
        <img className='float-left w-10' src={logo}/>
        <div className='float-right flex'>
        <h1 className='mr-3 align-middle' >Home</h1>
        <h1 className='mr-3 align-middle'>Watchlist</h1>
        <h1 className='align-middle'>Profile</h1>
        </div>
    </div>
  )
}

export default Header;