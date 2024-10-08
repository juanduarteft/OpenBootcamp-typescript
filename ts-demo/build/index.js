"use strict";
// ** video 1
console.log('hola typescript, hola martin');
console.log('adios martin');
// comentario en Ts
/**
 * Comentario multilinea, hecho mas que todo par documentacion, comentarios inteligentes
 *
 */
// ** video 2
// declaracion de variables
var nombre = "juan"; // varible 
let email = 'juan@juan.com'; // variable local
const PI = 3.141516;
console.log('hola', nombre);
console.log('hola ' + nombre);
console.log(`Hola ${nombre}`); // es mas recomendable usar string template
console.log(`Email de ${nombre} es ${email}`);
// tipado debil, fuerte e inferido, en js el tipado es inferido
var apellido = 'san jose'; //la variable puede cambiar de tipo y esto no es recomendable
apellido = 3;
let error; // si la variable se declara sin valor es buena practica definirle el tipo de variable
error = false;
console.log(`hay error?: ${error}`);
// Instancia multiple de variables
let a, b, c; // 3 variables sin valor, 
a = 'Carlos';
b = 9;
c = true;
// building types: number, string, boolean, void, null y undefined
// tipos mas complejos 
let listaTareas = ['tarea1', 'Tarea2'];
// combinar tipos en listas
let valores = [false, 'hola', true, 54];
// enumerados
var Estados;
(function (Estados) {
    Estados["completado"] = "C";
    Estados["incompleto"] = "I";
    Estados["pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["primero"] = 1] = "primero";
    PuestoCarrera[PuestoCarrera["segundo"] = 2] = "segundo";
    PuestoCarrera[PuestoCarrera["tercero"] = 3] = "tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.completado;
let puestoMaraton = PuestoCarrera.segundo;
// puedo creear que sigan la intergace Tarea
let tarea1 = {
    nombre: 'Tarea1',
    estado: Estados.pendiente,
    urgencia: 10
};
console.log(`Tarea ${tarea1.nombre}`);
let coche = {
    nombre: 'audi',
    precio: 100000000,
    anio: 2010
};
// ** condicionales
// operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// if - else if - else || 0 undefined null es igual a false
if (error) {
    console.log('hay error');
}
else {
    console.log('no hay un error');
}
if (coche.anio < 2010) {
    console.log('el coche es viejo');
}
else if (coche.anio === 2010) {
    console.log('el coche es del 2010');
}
else {
    console.log('el coche es nuevo');
}
// switch
switch (tarea1.estado) {
    case Estados.completado:
        console.log('tarea completada');
        break;
    case Estados.incompleto:
        console.log('la tarea esta incompleta');
        break;
    default:
        break;
}
try {
}
catch (error) {
}
// ** bucles
let listaTareasNueva = [
    {
        nombre: 'tarea 1',
        estado: Estados.completado,
        urgencia: 2
    },
    {
        nombre: 'tarea 2',
        estado: Estados.incompleto,
        urgencia: 0
    },
    {
        nombre: 'tarea 3',
        estado: Estados.pendiente,
        urgencia: 13
    }
];
// for clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea}`);
}
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
