import { Howl } from 'howler'

let soundList = {}

const soundPlayer = (store) => (next) => (action) => {
  
  if (action.type === 'PLAY_SOUND') {
    const { filename } = action.payload
    const sound = new Howl({
      src: [`sounds/${filename}.mp3`]
    });

    const id = sound.play()

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
