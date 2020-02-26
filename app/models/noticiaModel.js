module.exports = () =>
{
    
    this.getNoticias = (connection,callback) => {
        return connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection,callback,id) =>{
        return connection.query(`select * from noticias where id = ${id}`, callback);
    }

    return this;
}