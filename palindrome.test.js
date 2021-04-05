const palindrome = require('./palindrome');

test('check if palindrome is true or false', () => {
  expect(palindrome("race car")).toBe(true);
  expect(palindrome("laundery")).toBe(false);
});