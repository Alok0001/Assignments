const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateFibonacciSequence(numTerms) {
  const fibonacciSequence = [0, 1];

  if (numTerms <= 0) {
    return [];
  }

  while (fibonacciSequence.length < numTerms) {
    const nextNumber =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextNumber);
  }

  return fibonacciSequence;
}

rl.question("Enter the number of terms for the Fibonacci sequence: ", (userInput) => {
  const numTerms = parseInt(userInput);

  if (!isNaN(numTerms) && numTerms >= 1) {
    const fibonacciSequence = generateFibonacciSequence(numTerms);
    console.log(`Fibonacci sequence (${numTerms} terms):`, fibonacciSequence);
  } else {
    console.log("Invalid input. Please enter a positive integer greater than or equal to 1.");
  }

  rl.close();
});
