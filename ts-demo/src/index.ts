// ** video 1
console.log('hola typescript, hola martin')
console.log('adios martin')

// comentario en Ts

/**
 * Comentario multilinea, hecho mas que todo par documentacion, comentarios inteligentes
 * 
 */


// ** video 2
// declaracion de variables
var nombre:string = "juan" // varible 
let email:string = 'juan@juan.com' // variable local
const PI:number = 3.141516

console.log('hola', nombre)
console.log('hola ' + nombre)
console.log(`Hola ${nombre}`) // es mas recomendable usar string template
console.log(`Email de ${nombre} es ${email}`)

// tipado debil, fuerte e inferido, en js el tipado es inferido

var apellido:any = 'san jose' //la variable puede cambiar de tipo y esto no es recomendable
apellido = 3 


let error:boolean // si la variable se declara sin valor es buena practica definirle el tipo de variable
error = false

console.log(`hay error?: ${error}`)

// Instancia multiple de variables

let a:string,b:number,c:boolean // 3 variables sin valor, 
a = 'Carlos'
b = 9
c = true

// building types: number, string, boolean, void, null y undefined


// tipos mas complejos 
let listaTareas:string[] = ['tarea1', 'Tarea2']

// combinar tipos en listas
let valores:(string|number|boolean)[] = [false, 'hola', true, 54]

// enumerados
enum Estados {
    'completado' = 'C',
    'incompleto' = 'I',
    'pendiente' = 'P'
}
 
enum PuestoCarrera {
    'primero' = 1,
    'segundo',
    'tercero'
}

let estadoTarea: Estados = Estados.completado
let puestoMaraton: PuestoCarrera = PuestoCarrera.segundo

//  clases o interfaces
interface Tarea{
    nombre:string,
    estado:Estados,
    urgencia:number
}

// puedo creear que sigan la intergace Tarea
let tarea1: Tarea = {
    nombre: 'Tarea1',
    estado: Estados.pendiente,
    urgencia: 10
}

console.log(`Tarea ${tarea1.nombre}`)

// types de Typescript - conjuntos de datos mas complejos es la diferencia a interfaces
type Producto = {
    precio:number,
    nombre:string,
    anio:number
}

let coche:Producto = {
    nombre:'audi',
    precio:100000000,
    anio:2010
}

// ** condicionales
// operadores ternarios
console.log(coche.anio < 2010  ?  `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo` )

// if - else if - else || 0 undefined null es igual a false
if( error ){
    console.log('hay error')
}else{
    console.log('no hay un error')
}

if( coche.anio < 2010 ){
    console.log('el coche es viejo')
}else if( coche.anio === 2010 ){
    console.log('el coche es del 2010')
}else{
    console.log('el coche es nuevo')
}

// switch
switch (tarea1.estado) {
    case Estados.completado:   
        console.log('tarea completada')
        break;

    case Estados.incompleto:
        console.log('la tarea esta incompleta')
        break;

    default:
        break;
}


try {
    
} catch (error) {
    
}

// ** bucles
let listaTareasNueva : Tarea[] = [
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
]

listaTareasNueva.forEach( 
    (tarea:Tarea, index:number) => {
        console.log(`${index} - ${tarea.nombre}`)
    }
)