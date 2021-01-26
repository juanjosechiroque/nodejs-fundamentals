const fs = require('fs');

function leer (ruta, cb) {
  fs.readFile(ruta, function (err, data) {
    console.log(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err, data) {
    if (!err) {
      console.log('Se ha escrito correctamente');
    } else {
      console.log('Hubo un problema', err);
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, function (err, data) {
    if (!err) {
      console.log('Se ha eliminado correctamente');
    } else {
      console.log('Hubo un problema', err);
    }    
  });
}

leer("file.txt");
escribir('./file-created.txt', "Este es un nuevo archivo creado con el modulo fs");
borrar('./file-created.txt');
