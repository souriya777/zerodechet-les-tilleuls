import { SET_INFO, REMOVE_INFO } from './InfoActions'
import { SIGNOUT } from '../user/userActions'

export default function infos (state = {}, action) {
  switch (action.type) {
    case  SET_INFO:
      return {
        infoMsg: action.info
      }
    case REMOVE_INFO:
    case SIGNOUT:
      return null
    default:
      return state;
  }
}