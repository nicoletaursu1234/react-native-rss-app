import Event from '../../models/eventSchema'
import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from '../actions/events'

const initialState = {
  events: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = action.event;
      const newEvent = new Event(event.eventName, event.description, event.date);

      return {
        events: {...state.events, newEvent}
      }

    case REMOVE_EVENT:
      const updatedList = { ...state.events }
      delete updatedList[action.id]

    default:
      return state
  }
}