const readline = require('readline-sync');
const findMessage = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('Welcome to Calcultaor!');
let anotherCalc = true;
while (anotherCalc) {
  // Ask the user for the first number.
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  prompt(`The result is: ${output}`);

  // New calcuation? prompt
  let continueLoop = true;
  while (continueLoop) {
    prompt("Would you like to perform another calculation? Y/N?");
    let yesOrNo = readline.question();
    if (yesOrNo.toLowerCase()[0] === "no") {
      anotherCalc = false;
      continueLoop = false;
    } else if (yesOrNo.toLowerCase()[0] === "yes") {
      continueLoop = false;
    } else {prompt('Your answer is not a "Yes" or "No".')}
  }
} //end while anotherCalc loop
