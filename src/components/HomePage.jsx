import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function HomePage() {

  return (
      <div className=''>
        <div className=''>
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-4xl sm:text-6xl text-white">
                Crypto Tracker
            </p>
            </div>
        </div>
          <Player
              src='https://assets10.lottiefiles.com/packages/lf20_uje1bhir.json'
              className="player"
              loop
              autoplay
          />
      </div>
  )
}

export default HomePage;
