// principe d'évènement
const MyEmitter = require('events');

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('A');
  });
  myEmitter.emit('event');
// principe d'évènement

// L'objet http qui nous permets de crée un server et d'écouter lorsque on reçoit une requête
let http = require("http");

// read files
let fs = require("fs");

// manipulate url
let url = require("url");

let server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200);
  let query = url.parse(req.url, true).query;
  let name = query.name === undefined ? 'anononyme' : query.name;

  // read index.html
  fs.readFile("index.html", 'utf8', (err, data) => {
    // if error
    if (err) {
      Response.writeHead(404);
      Response.end("Le fichier n'existe pas");
    }
    // else write head
    res.writeHead(200, {
      "content-Type": "text/html; charset=utf8",
    });
    data = data.replace("{{ name }}", name);
    // send data from files index.html
    res.end(data);
  });
});

server.listen(8080);
