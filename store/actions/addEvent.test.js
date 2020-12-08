import { addEvent } from './events.js';
import { ADD_EVENT } from './events.js';

test('Function should return type ADD_EVENT', () => {
  expect(addEvent({ id: '1', name: 'Eat', description: 'Some borsch', date: '2020-10-31' }))
  .toStrictEqual({ type: ADD_EVENT, event: { id: '1', name: 'Eat', description: 'Some borsch', date: '2020-10-31' } });
})
