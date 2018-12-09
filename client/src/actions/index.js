
const lista_produtos = [
    {
      nome: 'Produto A',
      descricao: 'Descricao do produto A'
    },
    {
      nome: 'Produto B',
      descricao : 'Descricao do produto B'
    },
    {
      nome: 'Produto C',
      descricao : 'Descricao do produto C'
    },
    {
      nome: 'Produto D',
      descricao : 'Descricao do produto D'
    },
];

export const addTodo = lista => ({
    type: 'LISTA_PRODUTOS',
    lista : lista_produtos
});