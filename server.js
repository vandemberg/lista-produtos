const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

let url = 'mongodb://vandemberg:1234@localhost/lista-produtos';

// Configurações
mongoose.connect(url);

// Arquivos internos
const router = require('./routes');

app.use(cors({credentials: true, origin: true}));
app.use(router);

// Iniciando servidor
app.listen(port, () => console.log(`Listening on port ${port}`));