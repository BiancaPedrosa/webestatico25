function mostrarConteudo(evt, nomeAba) {
  // Declaração de variáveis
  let i, abaConteudo, abaBotoes;

  // Esconde todo o conteúdo das abas
  abaConteudo = document.getElementsByClassName("aba-conteudo");
  for (i = 0; i < abaConteudo.length; i++) {
    abaConteudo[i].style.display = "none";
  }

  // Remove a classe "ativo" de todos os botões
  abaBotoes = document.getElementsByClassName("aba-botao");
  for (i = 0; i < abaBotoes.length; i++) {
    abaBotoes[i].className = abaBotoes[i].className.replace(" ativo", "");
  }

  // Mostra o conteúdo da aba atual e adiciona a classe "ativo" ao botão
  document.getElementById(nomeAba).style.display = "block";
  evt.currentTarget.className += " ativo";
}