import { ADD_TODO } from '../constants/actionTypes'

export const addTodo = () => {
  return {
    type: ADD_TODO,
    payload: 'adding a todo'
  }
}


