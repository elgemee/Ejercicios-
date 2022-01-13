/*
Flujo orden en que se ejecutan las declaraciones
instrucciones de arriba hacia abajo
*/

let miVariable = 10;
console.log (miVariable);

/* Estructuras de control de flujo
ampersand && operador logico
or si una de ellas es verdadera */

let edad = 18;
let tienesINE = false;

if(edad >= 18 || tienesINE == true) {
    console.log('Puedes entrar')}
//  else {
//     console.log ('No puedes entrar')
// }

/* Operador ternario: forma corta de un if-else, se llama ternario porque tiene 3 partes*/
/*
(Condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso 
*/

let edad1= 19;
(edad1 >=18) 
? console.log('Mayor de edad') 
: console.log('Menor de edad');

let pregunta = (edad1 >=18)
? 'mayor de edad'
: 'menor de edad';
console.log(pregunta);

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >=18) ?"Mayor" : "Menor"} de edad`;

console.log(preguntaEdad);


/* */

let dia =4;
if(dia=== 0) {
    console.log('Domingo');
} else if (dia===1){
    console.log ('Lunes');
} else if (dia===2){
    console.log ('Martes');
} else if (dia===3){
    console.log ('Miercoles');
} else if (dia===4){
    console.log ('Jueves');
} else if (dia===5){
    console.log ('Viernes');
} else if (dia===6){
    console.log ('Sabado');
} else {
    console.log ('Ese no es un dia');
}

// Switch - case
/*
Switch(variable a evaluar){
    case valor:
        -codigo a ejecutar -
    break,
    default:
        -codigo a ejecutar si sale de las opciones -
        break;
}
*/
// si comento los break, no se ejecutan a partir del 3
// break detiene
let dia1= 0
switch (dia1){
    case 0:
        console.log('Domingo');
        document.write('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
     case 6:
        console.log('Sabado');
        break;
    default: 
        console.log('Invalido');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case "Bronce":
        descuento =5;
        break;
    case "Plata":
        descuento =10;
        break;
    case "Oro":
        descuento =15;
        break;
    default:
        console.log ("Cupon erróneo");
        break;

}

/* console.log(descuento);

Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado */
