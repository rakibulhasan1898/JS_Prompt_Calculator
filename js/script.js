var number1= parseFloat(prompt("Enter first number"));
var number2 = parseFloat(prompt("Enter second number"));

var sum, subtract, multiply, division, modulus;

sum = number1 + number2;
document.write(number1 + "+" + number2 + "="+ sum + "<br>");

subtract = number1 - number2;
document.write(number1 + "-" + number2 + "="+ subtract + "<br>");

multiply = number1 * number2;
document.write(number1 + "*" + number2 + "="+ multiply + "<br>");

division = number1 / number2;
document.write(number1 + "/" + number2 + "="+ division + "<br>");

modulus = number1 % number2;
document.write(number1 + "%" + number2 + "="+ modulus);
