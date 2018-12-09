const produtos = ( state = [], action ) => {
    
    switch(action.type) {
        
        case 'LISTA_PRODUTOS' :
            state = action.lista;

        default :
            return state;

    }
    
}

export default produtos;