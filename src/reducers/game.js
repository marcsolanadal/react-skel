import { 
  CHANGE_CHIMSER_STATE
} from '../constants/actionTypes'

const initialState = {
  chimster: {
    animation: 'run'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_CHIMSER_STATE:
      return {
        ...state,
        chimster: {
          ...state.chimster,
          animation: action.payload.animation
        }
      }

    default:
      return state
  }
}
