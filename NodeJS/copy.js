// crée un script capable de copier un fichier
let fs = require("fs");

fs.readFile("demo.mp4", (err, data) => {
  fs.writeFile("copy.mp4", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});


// avec la méthode stream pour les gros fichiers pour évier d'engorger la mémoire
let file = 'demo.mp4'
let read = fs.createReadStream(file);

read.on('data', (chunck) => {
    console.log("j'ai lu" + chunck.length)
})

read.on('end', ()=>{
    console.log("j'ai fini de lire le fichier")
})
