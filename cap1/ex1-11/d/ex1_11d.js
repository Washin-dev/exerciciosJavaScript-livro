// Ex1_11d: calcula a média aritmética de duas notas informadas pelo usuário.
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
function calcularMedia(a, b) {
  return (a + b) / 2;
}
alert(`A média final do aluno é: ${calcularMedia(nota1, nota2).toFixed(1)}`);
