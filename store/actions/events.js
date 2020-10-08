export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT ='REMOVE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

export const addEvent = event => {
  return {type: ADD_EVENT, event: event}
}

export const removeEvent = eventID => {
  return { type: REMOVE_EVENT, eventID: eventID}
}

export const updateEvent = eventID => {
  return { type: UPDATE_EVENT, eventID: eventID}
}