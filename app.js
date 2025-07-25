let listaNomes = [];

function adicionarAmigo() {
  let nomeAmigo = document.querySelector("input").value.trim();
  if (nomeAmigo == "") {
    alert("Por favor, insira um nome!");
  } else {
    if (listaNomes.includes(nomeAmigo)) {
      alert("Esse nome já existe");
    } else {
      listaNomes.push(nomeAmigo);
      limparCampo();
      atualizarListaAmigos();
    }
  }
}

function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < listaNomes.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaNomes[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaNomes === 0) {
    alert("A lista de amigos está vazia");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
  let amigoSorteado = listaNomes[indiceSorteado];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li><strong>O amigo secreto sorteado é:${amigoSorteado}</strong></li>`;

  listaNomes = [];
  document.getElementById("listaAmigos").innerHTML = "";
}

function limparCampo() {
  nomeAmigo = document.querySelector("input");
  nomeAmigo.value = "";
}
