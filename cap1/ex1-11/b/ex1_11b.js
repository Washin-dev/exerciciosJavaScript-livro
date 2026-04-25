// Ex1_11b: divide o valor total da conta entre clientes e mostra quanto cada um deve pagar.
const valorConta = 90;
const numeroClientes = 3;
const valorPorCliente = valorConta / numeroClientes;
alert(
  `Valor total da conta: R$ ${valorConta.toFixed(2)}\nValor por cliente: R$ ${valorPorCliente.toFixed(2)}`,
);
