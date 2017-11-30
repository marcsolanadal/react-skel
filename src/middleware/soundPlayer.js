import { Howl } from 'howler'
import localForage from 'localforage'

let soundList = {}

const soundPlayer = (store) => (next) => (action) => {

  if (action.type === 'PLAY_SOUND') {
    localForage.getItem(action.payload.filename).then((binary) => {  
      const blob = new Blob([binary], { type : 'audio/mp3' })
      const blobUrl = URL.createObjectURL(blob)

      const sound = new Howl({
        src: [blobUrl],
        format: ['mp3'],
        volume: action.payload.volume || 1
      })
      sound.play()
    })
  }
  
  if (action.type === 'PLAY_SOUND2') {
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
