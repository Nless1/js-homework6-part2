function calc(num1, num2, operator) {
  let result;
  switch (operator) {
    case "minus":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "plus":
      result = num1 + num2;
      break;
  }
  console.log(result);
}

calc(2, 3, "minus");
calc(5, 2, "multiply");
calc(10, 2, "divide");
calc(5, 2, "plus");
