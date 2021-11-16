import Taxes from "./taxes.js";
import Client from "./client.js";


let impuesto = new Taxes(210400, 23500);
let cliente = new Client("Lina", impuesto);

console.log(cliente.calcularImpuesto());
