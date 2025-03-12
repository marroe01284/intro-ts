//palindrome: word that is the same forwards and backwords eg: racecar 
//make a function that checks if the word is palindrome
function isPalindrome(word: string): boolean {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}
// make a new function using for looping
function isPalindromeUsingLoop(word: string): boolean {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i]!== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("mouse")); 
console.log(isPalindrome("rur"));
console.log(isPalindrome("level"));


