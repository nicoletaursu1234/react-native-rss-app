import Event from '../../models/eventSchema'
import { GET_EVENTS, ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from '../actions/events'
import { getData, storeData } from '../asyncStorage';
import {getToken, sendNotification} from '../../utils/notifications';

const initialState = {
  events: []
}

export default (state = initialState , action) => {
  switch (action.type) {
    case GET_EVENTS:
      const localEvents = getData();
      console.log('local:', localEvents);
      return {
        events: [localEvents]
      }

    case ADD_EVENT:
      const event = action.event;
      const newEvent = new Event(event.eventName, event.description, event.date);

      let tok;
      const token = getToken().then(res => tok=res)
      sendNotification(tok, event.eventName, event.description);

      return {
        ...state,
        events: [...state.events, newEvent]
      }

    case REMOVE_EVENT:
      return {
        events: state.events.filter(event => event.id !== action.id)
      }

    case UPDATE_EVENT:
      const item = action.payload;

      return {
        events:
          state.events.map(event => event.id === action.id ? (
            { ...event, name: item.eventName, description: item.description, date: item.date }
          ) : event)
      }

    default: return state
  }
}