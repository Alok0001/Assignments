function isPalindrome(inputString) {
    inputString = inputString.replace(/ /g, '').toLowerCase();
    const reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
  }
  
  const testString1 = "racecar";
  const testString2 = "hello";
  
  console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`);
  console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`);
  