import { Howl } from 'howler'

import sprite from '../constants/sounds'

/*
{
  type: 'PLAY_SOUND',
  payload: {
    filename: 'the-place-ill-return-someday'
  }
}

{
  type: 'STOP_SOUND',
  payload: {
    filename: 'the-place-ill-return-someday'
  }
}

*/

/*
{
  'the-place-ill-return-someday': Howl
}
*/

let soundList = {}

const soundPlayer = (store) => (next) => (action) => {
  
  if (action.type === 'PLAY_SOUND') {
    const { filename } = action.payload
    const sound = new Howl({
      src: [`assets/sounds/${filename}.mp3`]
    });

    sound.play()

    soundList = {
      ...soundList,
      [filename]: sound
    }
  }

  if (action.type === 'STOP_SOUND') {
    soundList[action.payload.filename].stop()
  }

  return next(action)
}

export default soundPlayer
