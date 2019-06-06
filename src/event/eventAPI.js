import {
  getEventList
} from '../event/eventFirebase'

let EVENT_API = {}

EVENT_API.getEventsForUser = async user => {
  const events = await getEventList()
  return {
    list: events
  }
}

export default EVENT_API