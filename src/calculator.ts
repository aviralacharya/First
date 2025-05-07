import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("🧮 Welcome to Smart Calculator");

  const operation = (await askQuestion(
    "Choose operation (add / subtract / multiply / divide): "
  )).toLowerCase();

  if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
    console.log(" Invalid operation.");
    rl.close();
    return;
  }

  const count = parseInt(await askQuestion("How many numbers? "));
  if (isNaN(count) || count < 2) {
    console.log(" You must enter at least 2 numbers.");
    rl.close();
    return;
  }

  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    const num = parseFloat(await askQuestion(`Enter number ${i + 1}: `));
    if (isNaN(num)) {
      console.log(" Invalid number.");
      rl.close();
      return;
    }
    numbers.push(num);
  }

  let result = 0; //Fix: Initial assignment

  switch (operation) {
    case "add":
      result = numbers.reduce((a, b) => a + b);
      break;
    case "subtract":
      result = numbers.reduce((a, b) => a - b);
      break;
    case "multiply":
      result = numbers.reduce((a, b) => a * b);
      break;
    case "divide":
      result = numbers.reduce((a, b) => a / b);
      break;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

main();
