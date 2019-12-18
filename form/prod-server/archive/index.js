"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Quick test: https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 */

/*
Info on express: http://expressjs.com/en/starter/hello-world.html
 */
const app = (0, _express.default)();
(0, _routes.registerRoutes)(app);
const port = 3000; //app.get('/', (req, res) => res.send('Hallo geschätzte Mediamatiker/-innen!'));

app.listen(port, () => console.log("Example app listening on port ".concat(port, "!")));