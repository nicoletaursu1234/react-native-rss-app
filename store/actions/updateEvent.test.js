import { updateEvent } from './events.js';
import { UPDATE_EVENT } from './events.js';

test('Function should return type UPDATE_EVENT', () => {
  expect(updateEvent({ id: '1', name: 'Eat', description: 'Some pizza', date: '2020-10-31' }, '1'))
  .toStrictEqual({ type: UPDATE_EVENT, payload: { id: '1', name: 'Eat', description: 'Some pizza', date: '2020-10-31' }, id: "1" });
})