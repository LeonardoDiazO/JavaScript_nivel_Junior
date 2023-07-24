//bucle FOR

//Partes del bucle 

//DECLARACION E INICIALIZACION
//CONDICION
//AUMENTO - DECREMENTO
let index = 10;

for (let index = 0; index < 6; index++) {
    document.write(index + "<br>");
    
}
//bucle for con decremento
let i = 10;
for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>");
    
}
// Como hacer bucle for pero con la declaracion de la variable dentro
//bucle continue
for (let a = 1; a <= 5; a++) {
    if (a == 4) {
        continue;
    }
    document.write(a + "<br>","<br>");
}

//For in y For of
let animales = ["gato", "perro", "tortuga", "conejo"];
//in nos muestra la posicion en la que estan los animales
for (const animal in animales) {
   document.write(animal + "<br>" , " IN nos muestra la posicion en la que estan los animales" ,"<br>");
}
//Of nos muestra el valor del elemento osea su contenido 
for (const animal of animales) {
    document.write(animal + "<br>", " OF nos muestra el valor del elemento contenido", "<br>");
 }













