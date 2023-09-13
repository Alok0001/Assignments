function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = "Hello World";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Outputs: "!dlroW ,olleH"
  