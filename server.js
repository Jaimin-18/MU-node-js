
const http=require('http')
var msg=`hii`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(`<h1>welcome to the first server<h1>
    ${msg}`)
    
}).listen(3000)

console.log("Server started http://127.0.0.1:3000")
