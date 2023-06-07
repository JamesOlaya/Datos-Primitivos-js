let doble = " ñkjdfhgñjk";
let simples= ' jhcvkjwkheñlBU';
let backticks = `dsaewt2ws`;

let lista_invitados = `"Invitados;
* María
* Juan
* Pedro
* Miguel
* Diana
`;

//alert(lista_invitados);

//Caracteres especiales\

/*
\n -> Nueva linea salto de linea
\t -> tubulacion
\\ -> blacklahs
\', \", \' -> cada una de las comillas
*/

console.log("Hola·\n Mundo");
lista_invitados = "Invitados:\n* María\t* Juan\t* Pedro\t* Miguel\t* Diana"; // se puede varias entre comillas dobles y comillas sencilla
console.log(lista_invitados)

// lONGITUD FE CADENAS

console.log("123".length);
console.log("mi\n".length);

let str = 'Hola';
console.log(str[-2]);
console.log(str.at(-2));

// for .. of

for( let char of "Hola") {
    console.log(char)
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "hola";

//console.log(inicioMay(str)); 
// buscar y hacer ejemplos que incluya nuestro nombres del metodo indexOf-, lastIndexOf-, includes,startsWith, endwiths, slice, substrings, trin, repat

let nombre = "James Ignacio Olaya Garzon";
// indexOf
    //alert(`La posicion de la primera letra "I" es la posicion ${nombre.indexOf("I") +1} del nombre: ${nombre}`); // el metodo indexOf sirve para buscar la posicion de la primera letra que se desse buscar, hay que tener ciudado con este metodo por que es muy sencible a las mayusculas y minusculas por eso peinso yo que sirve muvho cuando se utiliza los metodos "toUpperCase" o el "toLowerCase", eceptuando cuando se nesecita buscar la primera letra mayuscula que se ingresa o la primera minuscula de la letra

//lastIndexOf
        //alert(`la posicion de la ultima letra "O" es la posicion ${nombre.lastIndexOf("o") +1} del nombre: ${nombre}`) // el metodo lastIndexOf al contrario de indexOf, sirve para buscar la ultima letra qeu se desee buscar de la cadena de caracteres, pasa lo mismo que la anterior se puede utilizar con el toUpperCase y el toLowerCase para facilitar el problema de la censibilidad 
//let palabraNombre= prompt("ingrese la palabra que desea buscar del nombre " + nombre)

//alert(`la palabra \"${palabraNombre}\"${nombre.includes(palabraNombre) ? "si": "no"} esta dentro del nombre ${nombre}`) // el metodo .incluides sirve para buscar una cadena de caracteres o solo un caracter, y devuelve de una una respuesta para si esta o no esta dentro de la cedena donde lo busco


//let startName = prompt("ingrese las o la letra que debe comenzar el nombre de " + nombre)
//alert(`la o las palabras ${startName} esta en el nombre ${nombre} verdadero o falto?: \n La respuesta es: ${nombre.startsWith(startName) ? "verdadero" : "falso"}`) // el startsWith es  util pero cunado solo se utiliza para una cadena de caracter de un solo espacio 

// funcion que devuelva un string con el primer caracter en mayurcula del string ingresado por parametro
function primeraMayuscula(){
let firstMayusc = prompt("ingresela palabra que quiere dejar la primera letra en mayuscula")
return(firstMayusc[0].toUpperCase() + firstMayusc.substring(1));
}
//alert(primeraMayuscula())
// escriba la funcion buscarSpam que devuelva verdadero si el string que se ingresa como parametro contiene la palabra viagra o xxx en cualquier convinacion de minusculas o mayusculas 

function buscarSpam(){
let correo = prompt("ingrese el correo que le enviaron");
correo = correo.toLowerCase();
let via = ( correo.includes('viagra') ? true: false);
let xxx = ( correo.includes('xxx') ? true: false);
if ( via == true || xxx == true){
    return("verdadero");
}
else {
    return ("falso")
}

}
//alert(`el correo eviado es un spam? \n la respuesta es: ${buscarSpam()}`)
// crear un funcion que convierta una moneda a entero


function monedaEntero () {
    let moneda = prompt("ingrese la cantidad en dinero($)");
    let respuesta = undefined;
    let isMoney = moneda.startsWith('$') ? true : false; 
    if ( isMoney == true){
        respuesta = ( moneda.substring(1));
    }
    return(`la cantidad en estero de la cantidad de dinero ingresado es de: ${respuesta}`);
}

alert(monedaEntero());
