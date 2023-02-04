//* START EVENEMENT
// // principe d'évènement comme le server (ex: server.on...)
// // La différence que l'on peut gérer comment agisse nos évènements.
// const MyEmitter = require("events");

// // j'instance un nouvelle écouteur
// const myEmitter = new MyEmitter();

// myEmitter.on("event", () => {
//   console.log("A");
// });

// // je dis à mon écouteur d'émettre un évènement
// // ici l'évènement 'event'
// myEmitter.emit("event");
//* END EVENEMENT

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
    let emitter = new MyEmitter();
    // je démarre mon server
    let server = http
      .createServer((req, res) => {
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

let app = App.start(8080);

// lorsque la page d'accueil est lancé je lance mon serveur
app.on("root"),
  function (res) {
    res.write("je suis à la race");
  };

 
// let server = http.createServer();

// server.on("request", (req, res) => {
//   res.writeHead(200);
//   let query = url.parse(req.url, true).query;
//   // si le nom n'est pas défini je mets anonyme sinon je mets le nom de la personne
//   let name = query.name === undefined ? "anononyme" : query.name;

//   // read index.html, en second paramètre l'encodage et le callback
//   fs.readFile("index.html", "utf8", (err, data) => {
//     // if error
//     if (err) {
//       Response.writeHead(404);
//       Response.end("Le fichier n'existe pas");
//     }
//     // else write head
//     res.writeHead(200, {
//       "content-Type": "text/html; charset=utf8",
//     });
//     data = data.replace("{{ name }}", name);
//     // send data from files index.html
//     res.end(data);
//   });
// });

// server.listen(8080);
