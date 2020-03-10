const { check} = require('express-validator');

module.exports = function(app){
    app.get('/', function(req,res){
        app.app.controllers.HomeController.index(app,req,res);
    });

    app.get('/formulario_inclusao_noticia', function(req,res){
        app.app.controllers.AdminController.formulario_inclusao_noticia(app,req,res);
    });

    app.get('/noticias', function(req,res){
        app.app.controllers.NoticiaController.noticias(app,req,res);
    });

    app.get('/noticia/:id', function(req,res){
        app.app.controllers.NoticiaController.noticia(app,req,res);
    });

    app.post('/noticias/salvar', [
    
        //Validação de titulo
    check('titulo','Titulo obrigatorio').not().isEmpty(),
        //Validação de noticia
    check('noticia','Noticia obrigatorio').not().isEmpty()

    ], function(req,res){ 
        app.app.controllers.AdminController.noticias_salvar(app,req,res);
    });
}