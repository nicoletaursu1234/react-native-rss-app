export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const GET_EVENTS = 'GET_EVENTS';

export const addEvent = event => {
  return { type: ADD_EVENT, event: event }
}

export const removeEvent = eventID => {
  return { type: REMOVE_EVENT, id: eventID }
}

export const updateEvent = (payload, eventID) => {
  return { type: UPDATE_EVENT, payload: payload, id: eventID }
}

export const getEvents = () => {
  return { type: GET_EVENTS }
}