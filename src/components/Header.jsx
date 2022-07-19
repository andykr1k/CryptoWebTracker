import * as React from 'react'
import '../App.css'

function Header() {
  return (
    <div class="flex items-center justify-between p-3">
        <h1 className='float-left'>Logo</h1>
        <h1 className='float-right'>Profile</h1>
    </div>
  )
}

export default Header;