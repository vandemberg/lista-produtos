const express = require('express');
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// Arquivos internos
const router = require('./routes');

let url = 'mongodb://vandemberg:1234@localhost/lista-produtos';

// Configurações
mongoose.connect(url);

// Configurações do app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors({credentials: true, origin: true}));
app.use(router);

// Carrega o front-end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Iniciando servidor
app.listen(port, () => console.log(`Listening on port ${port}`));