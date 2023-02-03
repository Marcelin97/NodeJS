//? crée un script capable de copier un fichier
let fs = require("fs");

// // si je lis un fichier
// fs.readFile("demo.mp4", (err, data) => {
//   if (err) throw err;
//   // j'écris le fichier
//   fs.writeFile("copy.mp4", data, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// });

// avec la méthode stream pour les gros fichiers pour évier d'engorger la mémoire
// la lecture et l'écriture va se faire bloc par bloc

let file = "demo.mp4";

fs.stat(file, (err, stat) => {
  // variable pour connaître la taille du fichier
  let total = stat.size;
  // pour connaître l'état de progression de mon fichier
  let progress = 0;

  // je récupère ma méthode que je stock dans une variable
  let read = fs.createReadStream(file);

  let write = fs.createWriteStream("copy.mp4");
  
  // si tu reçois des données, tu prendras en paramètre une fonction qui prendra en paramètre un morceau (chunk)
  read.on("data", (chunk) => {
    console.log(`j'ai lu ${chunk.length}`);
    // savoir ou j'en suis dans la progression de lecture
    progress += chunk.length;
    // en pourcentage
    console.log("j'ai lu " + Math.round((100 * progress) / total) + "%");
  });

  // https://nodejs.org/docs/latest-v14.x/api/stream.html#stream_readable_pipe_destination_options
  read.pipe(write);

  write.on('finish', () => {
    console.log('All writes are now complete.');
  });
});
