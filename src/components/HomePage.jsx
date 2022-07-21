import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function HomePage() {

  return (
    <div className=''>
          <div class="max-w-3xl mx-auto text-center mt-10">
            <p class="text-4xl text-white font-extrabold sm:text-6xl">
                Welcome to the Future.
            </p>
            <a class="inline-block px-12 py-3 mt-8 text-sm font-medium border rounded-full border-white/25 hover:bg-white hover:text-red-500" href="/getstarted">
                Get Started
            </a>
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
