import eventAPI from '../event/eventAPI'

export const GET_EVENTS = 'GET_EVENTS'

const getEvents = events => {
  return {
    type: GET_EVENTS,
    events
  }
}

export const handleFetchEventForUser = user => {
  return async (dispatch) => {
    const events = await eventAPI.getEventsForUser(user)
    dispatch(getEvents(events))
  }
}
