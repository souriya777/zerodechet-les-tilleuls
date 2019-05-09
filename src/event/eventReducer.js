import { 
  GET_EVENTS,
} from './eventActions'

export default function event (state = null, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...action.events
      }
    default:
      return state;
  }
}