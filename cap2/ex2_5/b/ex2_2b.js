const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const valorPor15min = Number(frm.inValor.value);
  const horas = Number(frm.inHoras.value);
  const minutos = Number(frm.inMinutos.value);

  const tempoTotalMinutos = horas * 60 + minutos;

  const periodos = tempoTotalMinutos / 15;
  const valorTotal = valorPor15min * periodos;

  resp.innerText = `Valor a pagar R$ ${valorTotal.toFixed(2)}`;
  e.preventDefault();
});
