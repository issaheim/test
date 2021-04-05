function palindrome(str){
  const replaceSpace = str.replace(" ", "");
  const palindromeString = replaceSpace.split("").reverse().join("");
  return palindromeString === replaceSpace;
};

module.exports = palindrome;