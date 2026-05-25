const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário: R$ "));
const tempo = Number(prompt("Tempo de serviço (anos): "));
const quadrienio = Math.floor(tempo / 4);
const acrescimo = (salario * quadrienio) / 100;
console.log(`Quadriênios: ${quadrienio}`);
console.log(`Salário Final ${(salario + acrescimo).toFixed(2)}`);
