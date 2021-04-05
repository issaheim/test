const reverse = require('./reverse');

test('reverse string ', () => {
  expect(reverse("hello")).toBe("olleh");
});