"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _orderRoutes = _interopRequireDefault(require("./api/order/order-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//register endpoints
function registerRoutes(app) {
  app.use('/api', _orderRoutes.default);
}