const http = require('http');
port = 2000 || process.env.PORT;

const app = require('./app')

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server running.")
})