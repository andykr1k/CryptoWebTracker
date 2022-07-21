import * as React from 'react'
import logoutlogo from '../assets/logout.png'
import logo from '../assets/emoji.png'

function Footer() {

  return (
    <div class="flex items-center justify-between p-3">
        <img className='float-left w-10' src={logo}/>
        <div className=' bg-black bg-opacity-5 rounded p-1'>
          <img className='float-right w-6' src={logoutlogo}/>
        </div>
    </div>
  )
}

export default Footer;
