import axios from "axios";

export function loadProdutos(search = ''){
    
    return (dispatch) => 
    {
        return axios.get('http://localhost:5000/api/produtos', {search})
            .then((response) => {
                dispatch(refresh(response.data))
            });
    
    }
    
}

export function refresh(produtos) {
    return {
        type: "REFRESH",
        produtos
    }
}