const result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  let expression = result.value;

  // replace π with actual value
  expression = expression.replace(/pi/g, Math.PI);

  // calculate trigonometric functions
  expression = expression.replace(/sin\(/g, 'Math.sin(');
  expression = expression.replace(/cos\(/g, 'Math.cos(');
  expression = expression.replace(/tan\(/g, 'Math.tan(');

  // calculate square root and power functions
  expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
  expression = expression.replace(/\^/g, '**');

  // calculate logarithm
  expression = expression.replace(/log\(/g, 'Math.log(');

  try {
    result.value = eval(expression);
  } catch (e) {
    alert('Invalid expression');
  }
}
