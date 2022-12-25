const fs = require("fs");

const registrar = (info) => {
  const Citas = fs.readFileSync("citas.json", "utf8");
  const StringCitas = JSON.parse(Citas);

  const data = {
    nombre: info[0],
    edad: info[1],
    tipo: info[2],
    color: info[3],
    sintomas: info[4],
  };

  if (
    (data.nombre,
      data.edad,
      data.tipo,
      data.color,
      data.sintomas === undefined)
  ) {
    console.log("Error Reingrese datos");
  } else {
    fs.writeFileSync("citas.json", JSON.stringify([...StringCitas, data]));
    console.log("Registro OK!");
  }
};

const leer = () => {
  const myFile = fs.readFileSync("citas.json", "utf8");
  JSON.parse(myFile).forEach((file) => {
    console.log(file);
  });
};

module.exports = { registrar, leer };
