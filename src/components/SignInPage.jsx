import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function SignInPage() {

  return (
    <div className='w-8/12 md:w-4/12'>
        <Player
            src='https://assets3.lottiefiles.com/packages/lf20_umqaz2yv.json'
            className="player"
            loop
            autoplay
        />
      </div>
  )
}

export default SignInPage;
