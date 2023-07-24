//Tres muchachos de 23 años, entran a una heladeria 
//a comprar un helado, pero tienen un problema que los 
// los precios no estan al lado de cada helado, ellos quieren 
// comprar el helado más caro con el dinero que tienen


// Posibles soluciones, ingresar el monto y mostrar
// cuantos helados hay con valores altos 
// indicar el vuelto 

valorPedro = prompt("Hola, Pedro escribe cuanto dinero tienes disponible?");
valorDaniel = prompt("Hola, Daniel escribe cuanto dinero tienes disponible?");
valorJuan = prompt("Hola, Juan escribe cuanto dinero tienes disponible?");

//Convertimos en un entero 
valorPedro = parseInt(valorPedro);
valorDaniel = parseInt(valorDaniel);
valorJuan = parseInt(valorJuan);

//Valor1
if(valorPedro >= 0.6 && valorPedro < 1){
    alert("Pedro Puedes comprar el helado en agua");
    alert("y tus devueltas son: " + (valorPedro-0.6));
}
else if(valorPedro >= 1 && valorPedro < 1.7){
    alert("Pedro Puedes comprar un helado en crema");
    alert("y tus devueltas son: " + (valorPedro-1));
}
else if(valorPedro >= 1.7 && valorPedro < 1.8){
    alert("Pedro Puedes comprar un Helado de leche");
    alert("y tus devueltas son: " + (valorPedro-1.7));
}
else if(valorPedro >= 1.8 && valorPedro < 2.9){
    alert("Pedro Puedes comprar un GRANIZADO");
    alert("y tus devueltas son: " + (valorPedro-1.8));
}
else if(valorPedro >= 2.9){
    alert("Pedro Puedes comprar un HELADO MANTECADO o un SORBETE");
    alert("y tus devueltas son: " + (valorPedro-2.9));
}
else{
    alert("Pedro Lo siento no te alcanza para comprar helado")
}

//Valor2
if(valorDaniel >= 0.6 && valorDaniel < 1){
    alert("Daniel Puedes comprar el helado en agua");
    alert("y tus devueltas son: " + (valorDaniel-0.6));
}
else if(valorDaniel >= 1 && valorDaniel < 1.7){
    alert("Daniel Puedes comprar un helado en crema");
    alert("y tus devueltas son: " + (valorDaniel-1));
}
else if(valorDaniel >= 1.7 && valorDaniel < 1.8){
    alert("Daniel Puedes comprar un Helado de leche");
    alert("y tus devueltas son: " + (valorDaniel-1.7));
}
else if(valorDaniel >= 1.8 && valorDaniel < 2.9){
    alert("Daniel Puedes comprar un GRANIZADO");
    alert("y tus devueltas son: " + (valorDaniel-1.8));
}
else if(valorDaniel >= 2.9){
    alert("Daniel Puedes comprar un HELADO MANTECADO o un SORBETE");
    alert("y tus devueltas son: " + (valorDaniel-2.9));
}
else{
    alert("Danier Lo siento no te alcanza para comprar helado")
}

//Valor3
if(valorJuan >= 0.6 && valorJuan < 1){
    alert("Juan Puedes comprar el helado en agua");
    alert("y tus devueltas son: " + (valorJuan-0.6));
}
else if(valorJuan >= 1 && valorJuan < 1.7){
    alert("Juan Puedes comprar un helado en crema");
    alert("y tus devueltas son: " + (valorJuan-1));
}
else if(valorJuan >= 1.7 && valorJuan < 1.8){
    alert("Juan Puedes comprar un Helado de leche");
    alert("y tus devueltas son: " + (valorJuan-1.7));
}
else if(valorJuan >= 1.8 && valorJuan < 2.9){
    alert("Juan Puedes comprar un GRANIZADO");
    alert("y tus devueltas son: " + (valorJuan-1.8));
}
else if(valorJuan >= 2.9){
    alert("Juan Puedes comprar un HELADO MANTECADO o un SORBETE");
    alert("y tus devueltas son: " + (valorJuan-2.9));
}
else{
    alert("Juan Lo siento no te alcanza para comprar helado")
}