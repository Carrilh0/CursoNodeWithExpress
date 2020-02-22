var app = require('./config/server');

var rotas = require('./app/routes/routes')(app);

app.listen(3000, () => {
    console.log("Servidor criado com sucesso!");
});