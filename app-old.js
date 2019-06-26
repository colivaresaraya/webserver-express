const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        let out = {
            nombre: 'Cristian',
            edad: 34,
            url: req.url
        }
        res.write(JSON.stringify(out));
        res.end();
    })
    .listen(8080);

console.log('Escuchando desde puerto 8080');