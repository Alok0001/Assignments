const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

rl.question("Enter a number to check if it's prime: ", (userInput) => {
  const num = parseInt(userInput);

  if (!isNaN(num)) {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});
