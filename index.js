const http = require('http');
port = process.env.PORT || 2000;

const app = require('./app')

const server = http.createServer(app);

server.listen(process.env.PORT || 2000, () => {
    console.log("Server running.")
})