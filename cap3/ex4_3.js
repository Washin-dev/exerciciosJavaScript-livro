const prompt = require("prompt-sync")();
const pesoKg = Number(prompt("Quanto pesa a ração(kg): "));
const consumo = Number(prompt("Quantas grama são consumidas diariamente: "));
const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumo);
const sobras = pesoGr % consumo;
console.log(`A duração da ração vai ser de ${duracao} dias`);
console.log(`Ira sobrar ${sobras} gramas de ração`);
