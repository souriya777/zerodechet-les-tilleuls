import {  GET_USER} from '../actions/user'

export default function user (state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state;
  }
}