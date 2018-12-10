export default function produtos( state = [], action ) {
    
    switch(action.type) {
        
        case 'REFRESH':
            return [ action.produtos ];
        
        default:
            return state;

    }

}