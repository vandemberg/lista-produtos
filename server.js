const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// Configurações
mongoose.connect('mongodb://vandemberg:1234@localhost/lista-produtos');

// Arquivos internos
const router = require('./routes');

app.use(router);

// Iniciando servidor
app.listen(port, () => console.log(`Listening on port ${port}`));