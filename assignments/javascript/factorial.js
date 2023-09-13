const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(num) {
  let i;
  let fact = 1;

  for (i = num; i >= 1; i--) {
    fact *= i;
  }

  return fact;
}

rl.question("Enter a number to calculate its factorial: ", (userInput) => {
  const number = parseInt(userInput);

  if (!isNaN(number) && number >= 0) {
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
  } else {
    console.log("Invalid input. Please enter a non-negative number.");
  }

  rl.close();
});
