array1 = ["Leo", "Maria", "Jose", "Martin"];
array2 = ["Pedro", "Marcela", array1];


//Recorrido de bucles dentro de otro bucle 
//Sentencia label
forRancio:
for (let array in array2) {
    if (array == 2) {
        for(let array of array1){
            document.write(array + "<br>");
            break forRancio;//break con la sencia cierra el bucle en la posicion 2 del array2
        }
    }else {
        document.write(array2[array] + "<br>");
    }
}