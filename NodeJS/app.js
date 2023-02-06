// L'objet http qui nous permets de crée un server et d'écouter lorsque on reçoit une requête
let http = require("http");
// read files
let fs = require("fs");
// manipulate url
let url = require("url");

const MyEmitter = require("events");
// Je crée ma class App
// crée sous la forme d'un objet
let App = {
    // je crée ma méthode start
    // elle contient une fonction
    start: function (port) {
      let emitter = new MyEmitter()
      // je démarre mon server
      let server = http.createServer((req, res) => {
          // je lui renvoi un en tête avec le code 200 | success
          res.writeHead(200);
          // je veux détecter quand je suis à la racine
          if (req.url === "/") {
            // je veux que mon émetteur émette 
            emitter.emit("root", res);
          }
          res.end();
        })
        .listen(port);
      return emitter;
    },
  };

  module.exports = App