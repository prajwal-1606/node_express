const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1>Hello 1 World</h1>`)
    }
    else if(req.url === '/about'){
        res.end("About page is here")
    }
    else{
    res.end(`<h2>Oops!</h2><p>Page not found</p><a href='/'>home</a>`)
    }
})

server.listen(5000)