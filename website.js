var http = require("http");

var fs = require("fs");

var server = http.createServer(function(req,res){
    res.write(200,{'Content-Type' : 'text/html'});
    fs.fs.createReadStream('./webIndex.html').pipe(res);
});

server.listen(process.env.PORT || 5000);