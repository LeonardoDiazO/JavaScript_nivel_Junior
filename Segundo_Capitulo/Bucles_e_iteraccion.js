numeroParaSumar = 0;

if (numeroParaSumar < 5) {

    document.write("valor del primero numero " + numeroParaSumar+ "<br>");

    
}
//Bucle while
let numero =0;

while (numero < 5) {
    numero ++;
    document.write("bucle while"+numero+ "<br>");

}

//bucle do while
let num = 0;
//primero sumamos el numero y lo ejecutmos 
do {
    num++;
    document.write(num+"<br>");
}
//Y luego preguntamos si el numero es menor a 6
while (num < 6) // depende si la condicion es falsa


//Break

while (numero < 100) {


        numero ++;
        document.write("bucle while con break"+numero+ "<br>");    
        if (numero == 10){
            break;
        }

}
document.write("fin");




