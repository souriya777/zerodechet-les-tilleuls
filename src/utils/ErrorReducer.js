import { SET_ERROR } from './ErrorActions'
import { SIGNOUT } from '../user/userActions'

export default function errors (state = {}, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        errorMsg: action.error
      }
    case SIGNOUT:
      return null
    default:
      return state;
  }
}