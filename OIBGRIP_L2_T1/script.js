function insert(num) {
  document.getElementById('result').value += num;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function backspace() {
  let result = document.getElementById('result').value;
  document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculate() {
  let result = document.getElementById('result').value;
  if (result) {
      let operands = result.match(/[\d.]+/g);
      let operators = result.match(/[^\d.]+/g);
      let total = Number(operands[0]);
      for (let i = 0; i < operators.length; i++) {
          let operator = operators[i];
          let operand = Number(operands[i + 1]);
          switch (operator) {
              case '+':
                  total += operand;
                  break;
              case '-':
                  total -= operand;
                  break;
              case '*':
                  total *= operand;
                  break;
              case '/':
                  total /= operand;
                  break;
              default:
                  break;
          }
      }
      document.getElementById('result').value = total;
  }
}
