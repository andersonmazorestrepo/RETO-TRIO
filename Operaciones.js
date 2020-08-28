function estudiante(){

let nombre = [ "Andres" , "Santiago", "María", "Sebastian", "Valentina"];
let nota1= [3.9,4.0,5.0,5.0,2,4];
let nota2= [4.9,4.5,5.0,2.0,4,4];
let definitiva=[];


  for (let i = 0; i <= 4; i++){
    definitiva.push(nombre[i] + ` = ` + (nota1[i]+nota2[i])/2 + `\n`); 
  }

  const fs= require("fs");

fs.writeFile(`Nota.txt`,definitiva,(err) => {
  if(err) throw err;
   console.log(`La nota definitiva se realizo con exito `); 
})
}

exports.estudiante = estudiante;