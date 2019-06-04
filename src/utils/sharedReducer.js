import { SIGNOUT } from '../user/userActions'

export default function shared (state = null, action) {
  switch (action.type) {
    case SIGNOUT: 
      return null
    default:
      return state
  }
}