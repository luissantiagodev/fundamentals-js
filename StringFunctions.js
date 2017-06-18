function platzom(str){
  let translation = str;

  const reverse = (str) => str.split('').reverse().join('');
  const minMay = (str) => {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (var i = 0; i<length;i++){
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
  }
  // Si la palabra original es un palimodro, se devuelve la misma palabra
  if(str == reverse(str)){
    return minMay(str);
  }
  // Si la palabra termina en "ar", se le quitan los dos caracteres
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }

  // Si la palabra inicia con Z, se le añade "Pe" al final
  if(str.toLowerCase().startsWith("z")){
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad
    const lenghtOfWord= translation.length
    if(lenghtOfWord >= 10){
      const firstHalf = translation.slice (0 , Math.round(lenghtOfWord/2));
      const secondHalf = translation.slice (Math.round(lenghtOfWord/2));
      translation = `${firstHalf}-${secondHalf}`;
    }

  return translation;
}

platzom("Zorro"); //Zorrope
platzom("Programar") //Program
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos")// sOmEtEmOS