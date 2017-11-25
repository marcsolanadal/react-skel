/**
 * Logs all actions and states after they are dispatched.
 */
/* eslint-disable */
const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
/* eslint-enable */

export default logger
