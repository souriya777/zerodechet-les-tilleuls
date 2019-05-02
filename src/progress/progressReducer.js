import { LOAD_PROGRESS } from './progressActions'

export default function progress (state = null, action) {
  switch (action.type) {
    case LOAD_PROGRESS:
      return {
        ...action.progress
      }
    default:
      return state
  }
}