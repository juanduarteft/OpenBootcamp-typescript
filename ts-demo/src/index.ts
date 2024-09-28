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

// enumerados -> permite definir un conjunto de constantes 
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

//  clases o interfaces - es una estructura en forma de objeto
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


// asignacion multiple de variables
let miTarea = {
    titulo: 'Mitarea',
    estado:Estados.completado,
    urgencia:1
}

// ** factor spread(propagacion)

// declaracion 1 a 1
let miTitulo = miTarea.titulo
let miEstado = miTarea.estado
let miUrgencia = miTarea.urgencia


// en asignacion multiple
let {titulo:string, estado, urgencia:number} = miTarea

// en listas
let listaCompraLunes:string[] = ['leche', 'papa']
let listaCompraMartes:string[] = [...listaCompraLunes, 'tomate', 'cebolla']

// en objetos
let estadoApp = {
    usuario:'admin',
    sesion:3,
    jwt:'asdasd'
}

// cambiar valor de propagacion
let nuevoEstado = {
    ...Estados,
    sesion:4
}

/**
 * types de Typescript - conjuntos de datos mas complejos es la diferencia a interfaces usado mas
 * que todo en tuplas
**/
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

// for clasico
for(let index= 0; index < listaTareasNueva.length ; index++)
{
    const tarea = listaTareasNueva[index]
    console.log(`for clasico ${index} - ${tarea}`)
}

// for each
listaTareasNueva.forEach( 
    (tarea:Tarea, index:number) => {
        console.log(`for each ${index} - ${tarea.nombre}`)
    }
)

// while
while(tarea1.estado !== Estados.completado)
{   
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.completado
        break
    }else{
        tarea1.urgencia++
    }
}

// while
do{
    tarea1.urgencia++
    tarea1.estado = Estados.completado
}while(tarea1.estado !== Estados.completado);


// ** video 3: funciones

/**
 * funcion que muestra un saludo por consola
 */
function saludar_por_consola() {
    let name:string = 'juan'
    console.log('hola mundo')
}

saludar_por_consola()

/**
 * funcion que muestra un saludo por consola a una persona
 * @param name Nombre de la persona
 */
function saludar_persona(name:string)
{
    console.log(`Hola ${name}`)
}

// invocacion
saludar_persona('Juancho')

/**
 * funcion que muestra un saludo por consola a una persona
 * @param name nombre de la persona a saluda, default 'pepe'
 */
function despedirPersona(name:string = 'Jose') {
    console.log(`Adios ${name}`)
}

despedirPersona() // adios pepe 
despedirPersona('alba')

/**
 * Funcion que muestra un despido a una persona
 * @param name (opcional) nombre de la persona a despedir
 */
function despedirPersonaOpcional(name?:string) {
    if(name){
        console.log(`Adios ${name}`)  
    }else{
        console.log(`Adios`)
    }
}

despedirPersonaOpcional() // adios
despedirPersonaOpcional('rosa') // adios 'rosa'

function variosParams(name:string, lastname?:string|undefined, age:number = 18 ){
    if(lastname){
        console.log(`${name} ${lastname} tiene ${age} años`)
    }else{
        console.log(`${name} tiene ${age} años`)
    }
}

variosParams('Juaan') // Juaan tiene 18 años
variosParams('Juaan', 'Duarte') // Juaan Duarte tiene 18 años
variosParams('Juaan', 'Duarte', 28) // Juaan Duarte tiene 28 años
variosParams('Juaan', undefined, 28) // Juaan Duarte tiene 28 años 
// variosParams(name='Juaan', undefined) // Juaan Duarte tiene 28 años 
// variosParams(name='Juaan', lastname='Duarte', age=10) // Juaan Duarte tiene 28 años 

function ejemploVariosTipos(a:string|number){
    typeof(a) == 'string' ? console.log(a,'es un string') : console.log(a, 'Es un number')
}

ejemploVariosTipos('hola')
// ejemploVariosTipos(true)

// return 
/**
 * 
 * @param nombre nombre de la persona
 * @param apellidos apellido de la persona
 * @returns nombre completo de la persona
 */
 function ejemploReturn(nombre:string, apellidos:string):string{
    return `${nombre} ${apellidos}`
 }

 const nombreCompleto = ejemploReturn('juan', 'duarte')

 /**
  * Esto es una funcion que puede recibir un array de muchos nombres,
  * otra opcion seria la que esta debajo 
  * 
  * se puede tipar el retorno tambien, el void signifa que no retornara nada
  *  
  * @param nombres es una lista de nombres de string
  */
 function ejemploMultipleParams(...nombres: string[]): void{
    nombres.forEach( (nombre, index) => {
        console.log(nombre)
    })
 }

 function ejemploParamsListaString(nombres:string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
 }
 
 const lista:string[] = ['Juan', 'Omar', 'David']
 
 ejemploMultipleParams(...lista);
 ejemploMultipleParams('martin','juan','pepe');
 
 ejemploParamsListaString(lista);




// arrow functions
 type Empleado = {
    nombre:string,
    apellido:string,
    edad:number
 }

 let empleadoMartin:Empleado = {
    nombre:'martin',
    apellido :'martin',
    edad:25
 }

const mostrarEmpleado = (empleado:Empleado):string => `${empleado.nombre} tiene ${empleado.edad} años`

const datosEmpleado = (empleado:Empleado):string => {
    
    if(empleado.edad >= 18){
        return `${empleado.nombre} es mayor de edad`
    }else{
        return `${empleado.nombre} es menor de edad`
    }
}

datosEmpleado(empleadoMartin) // empleado martin es mayor de edad

// llamamos la funcion flecha
mostrarEmpleado(empleadoMartin)


const obtenerSalario = (empleado:Empleado, cobrar: () => string) => {
    if(empleado.edad >= 18){
        return 
    }else{
        cobrar() // callabck
    }
}

const cobrarSalario = (empleado: Empleado) => {
    console.log(`cobrar nomina de empleado a ${empleado.nombre}`)
}

obtenerSalario(empleadoMartin, () => 'Martin cobrar' )



// funciones asincronas, se ejecutan cuando yo lo quiero

async function ejemploAsync():Promise<string>{
    await console.log('tarea a compleatar antes de seguir con la secuencia de instrucciones')
    console.log('tarea completada')
    return 'Completado'
}

ejemploAsync().then( (respuesta) => {
    console.log('respuesta', respuesta)
}).catch( (error)=>{
    console.log('error', error)
}).finally( ()=>{
    'todo terminado'
})

// funciones generadoras 

function* ejemploGenerator(){

    // yield -> para emitir valores

    let index = 0

    while(index<5){
        yield index++
    }
}

// guardar en una variable la funcion 
let generadora = ejemploGenerator()

// accedemos a los valores emitidos
console.log(generadora.next().value) // 0  
console.log(generadora.next().value) // 1  
console.log(generadora.next().value) // 2  
console.log(generadora.next().value) // 3  


// worker
function* watcher(valor:number){
    yield valor; //valor inicial
    yield* worker(valor); // llamamos a las emisiones del worker emite otros valores
    yield valor + 4;
}

function* worker(valor:number){
    yield valor + 1
    yield valor + 2
    yield valor + 3   
}

let generatorSaga = watcher(0)
console.log(generatorSaga.next().value) // 0 lo ha hecho watcher
console.log(generatorSaga.next().value) // 1 lo ha hecho worker
console.log(generatorSaga.next().value) // 2 lo ha hecho worker
console.log(generatorSaga.next().value) // 3 lo ha hecho worker
console.log(generatorSaga.next().value) // 4 lo ha hecho watcher