import { 
  GET_USER,
  SIGNOUT,
} from './userActions'

export default function user (state = null, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...action.user
      }
    case SIGNOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}