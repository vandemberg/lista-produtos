
const Produtos = require("./../models/produtos");

class ProdutosRepository
{
    listAll(text = "", page = 1, limite=15) {
        
        return new Promise((resolve, reject) => {

            // Filtrando texto com expressão regular
            let search = {};
            
            if(text) 
                search.nome = new RegExp(`^${text}`, 'g');

            let query = {};
            
            query.skip = limite * ( page - 1);
            query.limit = limite;
            
            Produtos.find(search, {}, query)
                .then((doc) => resolve(doc));

        });
    }

    async total(text)
    {
        let search = {};
        
        if(text) 
            search.nome = new RegExp(`^${text}`, 'g');
        
            let result = await Produtos.countDocuments(search);
            return result;
    }

}   

module.exports = new ProdutosRepository();