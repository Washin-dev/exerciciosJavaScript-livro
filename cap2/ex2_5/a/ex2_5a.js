const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);
  const quantidade = Number(frm.inQuantidade.value);

  const desconto = Math.floor(preco * quantidade);
  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve ${quantidade} por R$ ${desconto.toFixed(2)}`;

  e.preventDefault();
});
