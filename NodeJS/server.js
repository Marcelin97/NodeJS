// Use with file app.js
// let app = require('./app').start(8080);

// // lorsque la page d'accueil est lancé je lance mon serveur
// app.on("root",
//   function (res) {
//     res.write("je suis à la race");
//   });

// Use package lodash
// let _ = require("lodash")
//  const lodash = _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']])
// console.log(lodash)

// Framework Express to start a application web
// Framework node.js
let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(8080)