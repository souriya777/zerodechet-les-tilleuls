import { GET_EVENTS } from './eventActions'
import { SIGNOUT } from '../user/userActions'

export default function event (state = null, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...action.events
      }
    case SIGNOUT: 
      return null
    default:
      return state;
  }
}