import { removeEvent } from './events.js';
import { REMOVE_EVENT } from './events.js';

test('Function should return type REMOVE_EVENT', () => {
  expect(removeEvent('1'))
  .toStrictEqual({ type: REMOVE_EVENT, id: '1' });
})