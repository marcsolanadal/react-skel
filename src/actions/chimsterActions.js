import { 
  CHANGE_CHIMSER_STATE
} from '../constants/actionTypes'

export const setChimsterAnimation= (animation) => {
  return {
    type: CHANGE_CHIMSER_STATE,
    payload: {
      animation: animation
    }
  }
}
