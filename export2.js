
const http=require('http')
const my=require('./export')
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'})
   res.end("<h1>"+my+"</h1>")
}).listen(4000)

console.log("Server started http://127.0.0.1:4000")
