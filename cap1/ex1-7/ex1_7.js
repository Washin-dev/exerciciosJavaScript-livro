// Sétimo programa em JavaScript: calcula o valor da gorjeta (10%) e exibe o total do jantar.
const valorJantar = 80;
const valorGorjeta = valorJantar * 0.1;
const valorTotal = valorJantar + valorGorjeta;
alert(
  `Valor do jantar: R$ ${valorJantar.toFixed(2)}\nValor da gorjeta: R$ ${valorGorjeta.toFixed(2)}\nValor total a pagar: R$ ${valorTotal.toFixed(2)}`,
);
