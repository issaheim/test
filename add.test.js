const { test, expect } = require('@jest/globals');
const add = require('./add');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2,3)).toBe(5);
});