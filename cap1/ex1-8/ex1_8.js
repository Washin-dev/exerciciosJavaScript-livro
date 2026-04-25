// Oitavo programa em JavaScript: converte dias em horas, soma horas adicionais e exibe o total.
const dias = Number(
  prompt("insira a quantidade de dias que essa viagem terá:"),
);
const horas = Number(
  prompt("Insira uma margem de horas que essa viagem terá:"),
);
function calcularHoras(a, b) {
  return a * 24 + b;
}
const totalHoras = calcularHoras(dias, horas);
alert(`O total de horas é: ${totalHoras}`);
