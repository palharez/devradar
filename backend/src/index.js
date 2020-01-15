const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin123@ds029197.mlab.com:29197/devradar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipo de parâmetros

// Query Params: request.query (FIltros, ordemação, paginação, ...)
// Route Params: request.params (Indetificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
app.use(routes);

app.listen(3333);
