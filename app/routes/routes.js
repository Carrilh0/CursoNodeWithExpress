
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('home/index');
    });

    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((error,result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });

    app.get('/noticia/:id', function(req,res){

        var connection = app.config.dbConnection();
        var id = req.params.id;
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia((error,result) => {
            res.render('noticias/noticia', {noticia : result});
        },id);
        
    });

    app.post('/noticias/salvar', function(req,res){
        
        var noticia = req.body;
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,(error,result) => {
            res.redirect('/noticias');
        });
    });
}