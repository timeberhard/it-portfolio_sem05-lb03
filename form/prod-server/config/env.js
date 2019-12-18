"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironment = setEnvironment;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//middleware/controller for routing in the backend and more
//application logger - Vorgänge während dem Betrieb festhalten (loggen)
//CORS - allows requests from foreign domains

/**
 * body-parser: parses incoming (HTTP) request bodies in the middleware before your handlers
 */

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app
 */
function setEnvironment(app) {
  //if this application it's not in production mode ...
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}
/**
 * Used to set development environment variables
 * @param {Express App} app
 */


function setDevEnv(app) {
  process.env.NODE_ENV = 'development'; //remark - these log entries appear only on the server and are not sent to the client!
  //console.log(`running in development mode`); --> done now in index.js
  //parsing incoming (HTTP) request bodies

  app.use(_bodyParser.default.json()); //Configure express to use morgan-logger. So each request is logged for future analysis.
  //use the morgan dev-logging-pattern

  app.use((0, _morgan.default)('dev')); //Configure express to allow requests from foreign domains

  app.use((0, _cors.default)());
}
/**
 * Used to set production environment variables
 * @param {Express App} app
 */


function setProdEnv(app) {
  process.env.NODE_ENV = 'production'; //console.log(`running in production mode`);
  //add static routes in order to serve static content (i.e. images) from the build folder called dist

  app.use(_express.default.static(__dirname + '/../../dist')); //parsing incoming (HTTP) request bodies

  app.use(_bodyParser.default.json());
}