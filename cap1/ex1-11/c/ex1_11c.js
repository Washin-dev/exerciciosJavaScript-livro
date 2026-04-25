// Ex1_11c: calcula o preço de um produto à vista com desconto e parcelado em 2 ou 3 vezes.
const precoProduto = 60;
const valorVista = precoProduto * 0.9;
const valorParcelado2 = precoProduto;
const valorParcelado3 = precoProduto * 1.15;
alert(
  `Preço do produto: R$ ${precoProduto.toFixed(2)}\n pagando à vista: R$ ${valorVista.toFixed(2)}\n parcelado em 2 vezes: R$ ${valorParcelado2.toFixed(2)}\n parcelado em 3 vezes: R$ ${valorParcelado3.toFixed(2)}`,
);
