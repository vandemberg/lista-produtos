const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produtosDataSchema = new Schema({
    nome : {type: String, require: true},
    descricao : { type: String },
    valor : { type: String },
    valor_total : { type: String },
});

var Produtos = mongoose.model('produtos', produtosDataSchema);

module.exports = Produtos;