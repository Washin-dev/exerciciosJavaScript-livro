// Ex1_11a: calcula quais são as casas vizinhas à esquerda e à direita com base na casa informada pelo usuário.
const casa = Number(prompt("Insira o número da casa:"));
const vizinhoEsquerda = casa - 1;
const vizinhoDireita = casa + 1;
alert(
  `O número da casa é: ${casa}\nO número da casa do vizinho à esquerda é: ${vizinhoEsquerda}\nO número da casa do vizinho à direita é: ${vizinhoDireita}`,
);
