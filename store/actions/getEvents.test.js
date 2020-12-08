import { getEvents } from './events.js';
import { GET_EVENTS } from './events.js';

test('Function should return type GET_EVENTS', () => {
  expect(getEvents()).toStrictEqual({type: GET_EVENTS});
})