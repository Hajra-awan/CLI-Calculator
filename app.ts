#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "Number" },
    { message: "enter your second number", type: "number", name: "number" },
    { message: "Select one of the  operator to perform Operation", type: "list", name: "operator",
        choices: [
            "addition", "subtraction", "multiplication", "divison", "mudels", "exponentiation"
        ],
    }
]);
if (answer.operator == "addition") {
    console.log(answer.Number + answer.number);
}
else if (answer.operator == "subtraction") {
    console.log(answer.Number - answer.number);
}
else if (answer.operator == "multiplication") {
    console.log(answer.Number * answer.number);
}
else if (answer.operator == "divison") {
    console.log(answer.Number / answer.number);
}
else if (answer.operator == "mudels") {
    console.log(answer.Number % answer.number);
}
else if (answer.operator == "exponentiation") {
    console.log(answer.Number ** answer.number);
}
else {
    console.log("please select valid operator.");
}