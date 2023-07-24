// Formas de hacer un Array

//  avecedario = ["a", "b", "c", "d", "e", "f" ];

//  document.write(avecedario[3] );


//Array asociativos 
let pc1 = {
    nombre: "LdPC",
    procesador: "IntelCore I5",
    ram: "16GB",
    espacio: "500GB"
};
pc2 =["LdPC", "IntelCore I5", "16GB", "500GB"];


let nombre = pc2["nombre"];
let procesador = pc1["procesador"];//Podemos pasar el dato contenido dentro de un array asocitivo
let ram = pc1["ram"];//Podemos pasar el dato contenido dentro de un array asocitivo
let espacio = pc1["espacio"];//Podemos pasar el dato contenido dentro de un array asocitivo

frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
        el procesador:<b>${procesador}</b> <br>
        la ram: <b>${ram}</b> <br>
        y de espacio tiene: <b>${espacio}</b>`;

        document.write(frase);
//document.write(pc2);
