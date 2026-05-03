// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvinte" de evento, adicionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; //obtém conteúdo do título
  const duracao = Number(frm.inDuracao.value); //obtém conteúdo da duração e convert para number

  const horas = Math.floor(duracao / 60); //arrendonda para baixo resultado
  const minutos = duracao % 60; //obtém o resto da divisão

  resp1.innerText = titulo;
  resp2.innerText = `Duração de ${horas} hora(s) e ${minutos} minutos`;
  e.preventDefault();
});
