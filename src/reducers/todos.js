import { ADD_TODO } from '../actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default todos
