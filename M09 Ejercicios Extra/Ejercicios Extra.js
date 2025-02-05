/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // var array= [];
   // var claves = Object.keys(objeto); //["D","B","C"]
   // for(var i=0; i<claves.length; i++){
   //    var letra= claves[i];
   //    array.push([letra,objeto[letra]]);
   // }
   // return array; 
   var array=[];

   for(x in objeto){
      array.push([x, objeto[x]]);
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // "ddaabcbcbc"

   var ordenada = string.split("").sort(function(a,b){
      return a.charCodeAt(0) - b.charCodeAt(0);
   }).join("");

   // ordenada = "aabcccdd"

   var obj={}; //{a:2,b:1,c:3,d:2}

   for(var i=0; i<ordenada.length; i++){
      if(Object.keys(obj).includes(ordenada[i])){
         obj[ordenada[i]]++;
      } else{
         obj[ordenada[i]]=1;
      };
   };
   return obj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var resultado="";
   var mayusculas="";
   var minusculas="";

   for(var i=0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         mayusculas+=string[i];
      } else{
         minusculas+=string[i];
      };
   };

   resultado=mayusculas+minusculas;

   return resultado;  
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var cadena = frase.split(" ").map(function (item){
      return item.split("").reverse().join("");
    }).join(" ");
    return cadena;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroInv = numero.toString().split("").reverse().join("");
   var numeroOrig = numero.toString();

   if(numeroInv === numeroOrig){
      return "Es capicua";
   }else{
      return "No es capicua";
   };  
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var result = string;
   result = result.split("");
   for(var letra of result){
      if(letra === "a") {
         result = result.join("").replace("a","");
         result= result.split("");
      }
      if(letra === "b") {
         result = result.join("").replace("b","");
         result = result.split("");
      }
      if(letra === "c") {
         result = result.join("").replace("c",""); 
         result = result.split("");     
   };
};
   return result.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   var arr=arrayOfStrings;
   for(var i=0; i<arr.length; i++){
      var comparador = arr[i];
      j = i-1;
      while(j>=0 && comparador.length < arr[j].length){
        arr[j+1] = arr[j]
        j--
      }
      arr[j+1] = comparador;
    }
    return arr; 
   
  
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];

   var set = new Set(array1);

   for(var i=0; i<array2.length; i++){
      if(set.has(array2[i])){
         resultado.push(array2[i]);
      };
   };
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
