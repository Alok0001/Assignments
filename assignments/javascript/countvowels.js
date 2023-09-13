function countVowels(inputString) {
    inputString = inputString.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const inputString = "Hello World";
  const numberOfVowels = countVowels(inputString);
  console.log(`Number of vowels: ${numberOfVowels}`);
  