function reverse(str) {
  return str.split("").reverse().join("");
};

reverse("hello");

module.exports = reverse;