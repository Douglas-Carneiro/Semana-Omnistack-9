const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-cpbf6.mongodb.net:27017,omnistack-shard-00-01-cpbf6.mongodb.net:27017,omnistack-shard-00-02-cpbf6.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query => Acessar query params (para filtros)
// req.params => Acessar route params (para edição, delete)
// req.body => Acessar corpo da requisição

app.use(express.json());
app.use(routes);

app.listen(3333);
