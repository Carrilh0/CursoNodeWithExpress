module.exports = () =>
{
    
    this.getNoticias = (connection,callback) => {
        return connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection,callback,id) =>{
        return connection.query(`select * from noticias where id = ${id}`, callback);
    }

    this.salvarNoticia = (noticia, connection, callback) =>{
        return connection.query('insert into noticias set ?',noticia, callback);
    }

    return this;
}