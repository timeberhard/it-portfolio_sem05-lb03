"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _routes = require("./routes");

var _env = require("./config/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Info on express: http://expressjs.com/en/starter/hello-world.html
 */
const app = (0, _express.default)(); //trust first proxy

app.set('trust proxy', 1); //set cookies

app.use((0, _cookieSession.default)({
  name: 'session',
  keys: ['key1', 'key2'],
  path: '/'
}));
(0, _env.setEnvironment)(app); //these routes must be called before app.get('*', ...)

(0, _routes.registerRoutes)(app); //implement counter

app.use(function (req, res, next) {
  let counter = req.session.views || 0;
  req.session.views = counter++;
  res.end(counter + ' views');
});
const port = 3000; // All non-API requests made to the server, for example, http://www.homepage.com/,
// will hit this request, which just returns the main layout, html file

app.get('*', (req, res) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
    return res.send('Running server in development mode.');
  } else {
    // Returns the main index file in production environment
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
}); // Starts the server on the given port

app.listen(port, () => {
  console.log("Application listening on port ".concat(port, " in ").concat(process.env.NODE_ENV, " mode!"));
});