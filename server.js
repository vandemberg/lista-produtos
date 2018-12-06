const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect('mongodb://vandemberg:1234@localhost/lista-produtos');

var Schema = mongoose.Schema;
var produtosDataSchema = new Schema({
    titulo : {type: String, require: true},
    descricao : String,
    valor : String,
    valor_final : String
}, {collection: 'fotos'});
var Produtos = mongoose.model('ProdutosData', produtosDataSchema);

router.get("/api/produtos", (req, res, next) => {

    Produtos.find()
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => res.render(err));
        
});

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));