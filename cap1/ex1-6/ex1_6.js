// Sexto programa em JavaScript: solicita dois números e exibe a soma usando uma função.
let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));
function somarValores(a, b) {
  return a + b;
}
alert(`a soma do numero ${num1} e ${num2} é: ${somarValores(num1, num2)}`);
