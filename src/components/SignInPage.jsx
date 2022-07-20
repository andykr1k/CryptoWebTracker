import * as React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

function SignInPage() {

  return (
      <div>
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
