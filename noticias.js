var http = require('http');

var server = http.createServer( (req, res) => {
    
    var categoria = req.url;

    if(categoria == '/teste'){
        res.end("chora viola");

    }else{
        res.end("Oi");
    }
    
});

server.listen(3000);