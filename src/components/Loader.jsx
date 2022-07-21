import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function Loader() {

  return (
    <div className=''>
        <Player
            src='https://assets8.lottiefiles.com/packages/lf20_8lcyef9f.json'
            className="player"
            loop
            autoplay
        />
      </div>
  )
}

export default Loader;
