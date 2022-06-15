import shortid from "shortid";

export default function seed(store) {
  console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "Esta é sua primeira Lista, geralmente, tratam de um tópico, tema ou tarefa em específico" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Este é seu primeiro card. Cada card contém infromações úteis, geralmente sobre o que sua lista trata!"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Clique no ícone de edição para editar ou deletar conteúdo o Card"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Clique no título da Lista para editar ou deletar a Lista"
    }
  });

  console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Cada Lista é inserida em uma Board!" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Uma Board é o seu espaço de trabalho, onde podes ter um Tema, como \"Trabalhos da Universidade\" e ter varias Listas com informações sobre cada Trabalho"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Você também pode mover Cards entre Listas ou ainda mudar a ordem das Listas. Basta clicar e arrastar!"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Além disso tudo, ainda podes Adicionar novos Cards clicando no botão (+ Add a Card)"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "E ainda podes adicionar novas Listas a sua Board clicando no botão (+ Add a List)"
    }
  });
};
