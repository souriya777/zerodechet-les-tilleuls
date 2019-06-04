import { FETCH_LAST_START_DATE } from './weightActions'
import { SIGNOUT } from '../user/userActions'

export default function weight (state = null, action) {
  switch (action.type) {
    case FETCH_LAST_START_DATE:
      return { lastStartDate: action.lastStartDate }
    case SIGNOUT: 
      return null
    default:
      return state
  }
}