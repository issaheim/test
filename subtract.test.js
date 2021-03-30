const sub = require('./subtract');

test('subtracts 5 - 1 to equal 4', () => {
  expect(sub(5,1)).toBe(4);
});