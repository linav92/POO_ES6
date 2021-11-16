"use strict";

var _taxes = _interopRequireDefault(require("./taxes.js"));

var _client = _interopRequireDefault(require("./client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _taxes["default"](210400, 23500);
var cliente = new _client["default"]("Lina", impuesto);
console.log(cliente.calcularImpuesto());