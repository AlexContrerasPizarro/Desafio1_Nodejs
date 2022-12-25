const { registrar, leer } = require("./operaciones.js");

const datainfo = process.argv.slice(2);
const operacion = datainfo[0];

if (operacion === "registrar") {
  registrar(datainfo.slice(1));
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Favor ingresar correctamente la sentencia");
}
