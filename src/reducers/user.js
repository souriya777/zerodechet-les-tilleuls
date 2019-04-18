import { SIGNIN } from '../actions/user'

export default function user (state = {}, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        user: action.user
      }
    default:
      return state;
  }
}