
const data = [
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


export default function produtos( state = data, action ) {
    
    switch(action.type) {
        
        case 'REFRESH':
            return [ action.produtos ];
        
        default:
            return state;

    }

}