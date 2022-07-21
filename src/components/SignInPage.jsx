import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function SignInPage() {

  return (
      <div className='grid place-items-center min-h-screen'>
        <div className=''>
          <div className=''>
            <h1 className='text-4xl font-extrabold sm:text-6xl text-white'> Welcome to the Future.</h1>
          </div>
            <Player
                src='https://assets10.lottiefiles.com/packages/lf20_uje1bhir.json'
                className="player"
                loop
                autoplay
            />
        </div>
      </div>
  )
}

export default SignInPage;
