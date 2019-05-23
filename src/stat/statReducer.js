import { FETCH_STAT } from './statActions'

export default function stat (state = null, action) {
  switch (action.type) {
    case FETCH_STAT:
      return {
        ...action.stat
      }
    default:
      return state
  }
}