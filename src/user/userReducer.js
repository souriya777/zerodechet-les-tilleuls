import { 
  SET_USER,
  BECOME_EXPERT,
  SIGNOUT,
} from './userActions'

export default function user (state = null, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.user
      }
    case BECOME_EXPERT:
      return Object.assign({}, state, {
        isNew: action.isNew,
      })
    case SIGNOUT: 
      return null
    default:
      return state;
  }
}