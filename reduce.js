
function suma(...numbers) //Recibir varios parametros
{
  return numbers.reduce(function(acum,numero){ // Acumulador diseñado para los arrays
    acum += numero;
    return acum;
  },0);
}

// Crear una funcion donde te devuelva el array con numeros dobles
const doble = (... numbers) => numbers.map(numbers => numbers*2);


const pares = (...numeros) => numeros.filter(numero=>numero%2==0);


function pares(numeros){
  numeros.filter(function (numero){
    return numero % 2 ==0;
  });
}

doble (2,2,2);


Programa donde entrega el array al doble 

const arrayOfSum = (...number) => number.map(index => index*2);


Encontrando la palabra mas larga

function findLongestWord(str) {
  let maxLength = 0;
  let arrayOfWords = str.split(' ');
    
   arrayOfWords.map(function(index){
      if(index.length>maxLength)
          maxLength = index.length;
   });
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
  


function saludarFamilia(apellido){

  return function saludarMiembroDe(nombre){
    console.log(`hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez");
const saludarPerez = saludarFamilia("Perez");

saludarGomez("Pedro")
saludarG1omez("Juan")
saludarGomez("Manuel")
saludarGomez("Luis")


saludarPerez("Dario");
saludarPerez("Martin");
saludarPerez("Julieta");


// Programa que añade un prefijo

function prefix(prefrixStr){
  return makePrefixer = (str)=> console.log(`${prefrixStr}${str}`);
}

const prefijoRe = prefix("re")
prefijoRe("bueno");


