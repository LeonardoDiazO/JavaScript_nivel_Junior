// alert('Hola, you')

//Como asigno una variable dendon de javascript
recipiente = "Papel";

alert(recipiente)

// Tipos de variables
String = "Cadena de texto"; // es una cadema de texto
number = 1;// no va entre comillas
Boolean = false; // es un valor entre 0-1 (true o false()

undefined // Es un valor de tipo de dato que no esta la variable indeficina
null // es un valor de tipo de dato
NaN // es un valor no definido en la variable

//Let y var son variables que si se pueden modificar pero Const NO
var Max = 15; // es un valor en el que le asignamos a la varible
let numero; // es un valor que tiene alcance global
const Number = numero; // es un valor de tipo que siempre va tener el mismo valor no se va cambiar

numero = 10;

// Que es el hoosting 
let numero1 = 23, numero2 = 10, numero3 = 5;

alert(numero1, numero2, numero3);

//Declaramos let en valor null
let numero5 = null;

let numero6 = 5;
let numero7 = 6;
alert(numero6 * numero7);

//Es una funcion que nos ayuda a guardar el valor en una caja de texto

let nombre = prompt("Hola, dime tu nombre");
alert("Hola " + nombre);

// Operadores de Javascript

//Operadores de asignacion 

let x = 10;
x += 5;
document.write(x);
//Slash invertido = alt + 92 
//Multiplicar
x *= 5;
//Division
x /= 5;
//Resto, nos da un valor de el resto de una division 
x %= 5;
//Exponecial
x **= 5;

//Operadores aritmeticos 
Ns = 10;
Nc = 5
Resultado = Ns + Nc

Ns--;
Resultado = Ns
// Resultado = Ns / Nc;       Division
// Resultado = Ns**2; Al cuadrado  // Resultado = Ns **3; Al cubo      Exponencializacion

alert(Resultado)

//Concatenacion 
saludo = "¡ Hola Leo !";
pregunta = "¿ Como estas ?";
frase = saludo.concat(pregunta);

document.write(frase);
// Otra forma de concatenar
nombre = "Leonardo Diaz"
flase2 = `Soy ${nombre} y estoy nadando`;

document.write(flase2);

//Operaores (Intermedios)
//Operadores logicos 
//Operadores de comparacion 
//False o verdadero

let n1 = 23;
let n2 = 13;
document.write(n1 == n2);// igual 
document.write(n1 != n2);//-distinto de 
document.write(n1 === n2);//Estrictamente igual 
document.write(n1 !== n2);//Estrictamente distinto
document.write(n1 < n2);//Menor
document.write(n1 > n2);//Mayor

//Valor logico 
let v1 = true;
let v2 = true;

let resultadov = v1 && v2;// si las dos condiciones se cumplen entonces es true 

let resultado2 = v1 || v2;// si cualquiera de las dos es true entonces es true pero si una es false queda false

let resultaod3 = !v1;// Es la negacion del resultado que de las condiciones 

document.write(resultadov)







