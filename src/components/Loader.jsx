import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function Loader() {

  return (
    <div>
        <Player
            src='https://assets8.lottiefiles.com/packages/lf20_8lcyef9f.json'
            className="player w-6/12"
            loop
            autoplay
        />
      </div>
  )
}

export default Loader;
