const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page');
        res.end();
    }
    if(req.url === '/about'){
        res.end('This is the about page');
    }
    res.end(`
    <h1>oops!</h1>
    <h3>we cant seem to find the page you are looking for</h3>
    <a href='/'>back home</a>
    `)
})

server.listen(5000);