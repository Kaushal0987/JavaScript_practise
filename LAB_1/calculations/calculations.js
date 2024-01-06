document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);
document.getElementById('mod').addEventListener('click', mod);

function add() {
 let operand1 = Number(document.getElementById('op1').value);
 let operand2 = Number(document.getElementById('op2').value);
 let result = operand1 + operand2;
 document.getElementById('result').value = result;
}

function sub() {
 let operand1 = Number(document.getElementById('op1').value);
 let operand2 = Number(document.getElementById('op2').value);
 let result = operand1 - operand2;
 document.getElementById('result').value = result;
}

function mul() {
 let operand1 = Number(document.getElementById('op1').value);
 let operand2 = Number(document.getElementById('op2').value);
 let result = operand1 * operand2;
 document.getElementById('result').value = result;
}

function div() {
 let operand1 = Number(document.getElementById('op1').value);
 let operand2 = Number(document.getElementById('op2').value);
 if (operand2 !== 0) {
  let result = operand1 / operand2;
  document.getElementById('result').value = result;
 } else {
  document.getElementById('result').value = "Cannot divide by zero";
 }
}

function mod() {
 let operand1 = Number(document.getElementById('op1').value);
 let operand2 = Number(document.getElementById('op2').value);
 if (operand2 !== 0) {
  let result = operand1 % operand2;
  document.getElementById('result').value = result;
 } else {
  document.getElementById('result').value = "Cannot perform modulus with zero";
 }
}