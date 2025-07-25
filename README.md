<h1 align="center"> Jogo do Amigo Secreto </h1>

# 🎁 Projeto Amigo Secreto

Este é um projeto simples de **Amigo Secreto** feito com **HTML**, **CSS** e **JavaScript**, que permite:

- Adicionar nomes de amigos;
- Exibir a lista adicionada;
- Sortear aleatoriamente um dos nomes;
- Limpar a lista automaticamente após o sorteio.

---

## 📋 Funcionalidades

✅ Adicionar amigos via campo de texto  
✅ Impedir nomes repetidos  
✅ Exibir a lista atualizada em tempo real  
✅ Sortear um nome aleatório da lista  
✅ Exibir o resultado do sorteio  
✅ Limpar a lista após o sorteio  

---

## 🚀 Como usar

1. Digite o nome no campo de entrada e clique em **"Adicionar"**.
2. Veja o nome aparecer na lista.
3. Quando tiver todos os nomes, clique em **"Sortear Amigo"**.
4. O nome sorteado será exibido e a lista será automaticamente limpa para um novo sorteio.

---

## 🧠 Lógica do Sorteio

- Antes de sortear, o código verifica se a lista não está vazia.
- Usa `Math.random()` e `Math.floor()` para escolher um índice aleatório.
- O nome correspondente é exibido e a lista é esvaziada para um novo uso.

---

## 📁 Estrutura do Código

### `adicionarAmigo()`

- Captura o nome digitado.
- Valida se está vazio ou repetido.
- Atualiza a lista visual com `atualizarListaAmigos()`.

### `atualizarListaAmigos()`

- Limpa o conteúdo da `<ul>` antes de inserir os itens.
- Percorre o array com `for` e cria elementos `<li>`.

### `sortearAmigo()`

- Verifica se há nomes.
- Sorteia usando `Math.random()` e `Math.floor()`.
- Exibe o sorteado e limpa tudo.

---

