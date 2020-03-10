const { check, validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = function(app,req,res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia : {}});
}
module.exports.noticias_salvar = function(app,req,res){
    var noticia = req.body;

        const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return res.render('admin/form_add_noticia',{ validacao: erros.array(), noticia: noticia});
            }


        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,(error,result) => {
            res.redirect('/noticias');
        });
}