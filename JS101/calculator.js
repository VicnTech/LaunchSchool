const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function message(message) {
  return MESSAGES[language][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(`1) English? 2) Español? 3) Français?`);
let language = readline.question();
let continueLoop = true;
while (continueLoop) {
  switch (language) {
    case '1':
      language = "english";
      continueLoop = false;
      break;
    case '2':
      language = "spanish";
      continueLoop = false;
      break;
    case '3':
      language = "french";
      continueLoop = false;
      break;
  }
}

prompt(message(language, 'welcome'));
let anotherCalc = true;
while (anotherCalc) {
  // Ask the user for the first number.
  prompt(message('askFirstNum'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message('sayInvalid'));
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(message('askSecondNum'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message('sayInvalid'));
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(message('askOperation'));
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message(language, 'sayNotOperator'));
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
  prompt(`${message(language, 'sayResult')}${output}`);

  // New calcuation? prompt
  continueLoop = true;
  while (continueLoop) {
    prompt(message(language, 'askAnother'));
    let yesOrNo = readline.question();
    if (yesOrNo.toLowerCase()[0] === "n") {
      anotherCalc = false;
      continueLoop = false;
    } else if (yesOrNo.toLowerCase()[0] === "y") {
      continueLoop = false;
    } else {prompt(message(language, 'sayNotYN'))}
  }
} //end while anotherCalc loop
