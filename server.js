const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Node server is running!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
