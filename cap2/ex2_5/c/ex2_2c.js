const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value.trim();
  const preco = Number(frm.inPreco.value);
  const quantidade = Number(frm.inQuantidade.value);

  if (!produto || preco <= 0 || quantidade <= 0) {
    resp1.innerText = "Informe produto, preço e quantidade válidos.";
    resp2.innerText = "";
    return;
  }

  const precoNormalTotal = preco * quantidade;
  const gruposDe3 = Math.floor(quantidade / 3);
  const resto = quantidade % 3;
  const precoPor3 = preco * 2.5;
  const totalComPromocao = gruposDe3 * precoPor3 + resto * preco;
  const desconto = precoNormalTotal - totalComPromocao;

  resp1.innerText = `Produto: ${produto} - Quantidade: ${quantidade} - Total normal: R$ ${precoNormalTotal.toFixed(2)}`;

  if (gruposDe3 > 0) {
    resp2.innerText = `Promoção aplicada: ${gruposDe3} grupo(s) de 3 por R$ ${precoPor3.toFixed(2)}. Terceiro produto sai por R$ ${(preco / 2).toFixed(2)}. Total com desconto: R$ ${totalComPromocao.toFixed(2)} (desconto R$ ${desconto.toFixed(2)}).`;
  } else {
    resp2.innerText = `Nenhuma promoção aplicada. Compre 3 unidades para ganhar a oferta de 3 por R$ ${precoPor3.toFixed(2)}.`;
  }
});
