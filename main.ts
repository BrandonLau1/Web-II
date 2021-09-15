<<<<<<< HEAD
//tipado
const rectangulo = { altura: 10, anchura: 15 };
const area = rectangulo.altura * rectangulo.anchura;
console.log(area);

//function
function saludar(nombre) {
    return "Hola , " + nombre;

}

console.log(saludar("Geovanny"));

//let
let esVerdadero = true;
console.log(esVerdadero);

//numbers
let decimal: number = 18;
let hexa: number = 0x000040;
let octa: number = 0o20;
let bin: number = 0b0111;

console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);

//strings
let nombre: string = "Brandon";
let apellido: string = "Lau";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

console.log(impresion);

//arreglos
let listaDeNumeros: number[] = [1, 2, 3];
console.log(listaDeNumeros);

let listaDeNumeros2: Array<number> = [1, 2, 3];
console.log(listaDeNumeros2);

//tuples
let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

//enums
enum MarcasDeAutos {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;

console.log(tacoma);
console.log(MarcasDeAutos[0]);

//Any
let variablesSinTipo: any = 'Hola Profe';
variablesSinTipo = 100;

console.log(variablesSinTipo);

//unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;

console.log(valorDesconocido);

//void
function saludar2(): void {
    console.log("Hola Mundo... cruel");
}

saludar2();

//null y undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

console.log(variableSinDefinir + " " + variableNula);
//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while (true) { }
}

//tipos objects
declare function crear(o: object): void;

crear({ prop: 0 })
crear(null);
crear(undefined);
crear([]);

//unions
function imprimirID(id: number | string) {
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirID(100.234234423);
imprimirID('este_es_mi_id');

//type asertions
let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;
let longitudDelString2: number = (<string>algunValor).length;

//functions
function saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludar3("Orlando");

function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//funciones anonimas
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//aliases
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada x es : ${punto.y}`);
}

imprimirCoordenada({ x: 10, y: 25 });

//tipos interfaces
interface Etiqueta {
    label: string;
}

function imprimirEtiqueta(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);

//propiedades opcionales
interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area }
}

crearCuadrado({ ancho: 10 });

//propiedades de solo lectura
interface Punto2 {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto = { x: 10, y: 20 };
punto1.x = 20;

//tipos, interfaces vs types
interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
}

//extender interface
interface Auto extends Transporte {
    ruedas: number;
}

//extender un type
type Cuadrado2 = Figura & {
    lados: 4;
}

//tipos literales
function imprimir(estadoCivil: 'soltero' | 'casado') {
    console.log(estadoCivil)
}

imprimir('soltero');

//funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn("hola mundo");
}

function imprimirconsola(s: string) {
    console.log(s)
}

saludar4(imprimirconsola);

//funciones contructor signature
interface Transporte {
    nombre: string;
}
class caballo implements Transporte {
    constructor(public nombre: string) { }
}
class Automovil implements Transporte {
    constructor(public nombre: string) { }
}
type ConstructorDeTransporte = {
    new(nombre: string): Transporte;
};
function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}

const miCaballo = construirTransporte(caballo, "Caballito");
const miAutomovil = construirTransporte(Automovil, "Honda");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);

//funciones parametros opcionales
function f(n: number) {
    console.log(n.toFixed());       //no se especifia argumento
    console.log(n.toFixed(3));      // se especifica un argumento
}

function f2(n?: number) {
    // ...
}

//parametros opcionales en los callbacks
function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
} function miIterador2(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        // aqui es donde index es opcional o no
        callback(arr[i]);
    }
}

//funciones overload
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}

console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));

//funcion simplificada con unions
function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5,]));

//funciones uso de this
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

//funciones rest parameters
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

//funciones parameter destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}

const numeros = { a: 1, b: 2, c: 3 };

console.log(sumar(numeros));

function sumar2({ a, b, c }): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, x: 3 }));

//objects types()
function saludar5(persona: { nombre: string; edad: number }) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar5({ nombre: "Luis", edad: 22 }));

interface Persona {
    nombre: string;
    edad: number;
}

function saludar6(persona: Persona) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar6({ nombre: "Elena", edad: 25 }));

type Persona2 = {
    nombre: string;
    edad: number;
}

function saludar7(persona: Persona2) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar7({ nombre: "Anabel", edad: 30 }));

//object types property modifiers  propiedades opcionales
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir2(computador: Computadora) {
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir2({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});

//object types readonly properties
interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: "Shitzu" };

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

interface Personas {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}

const Luisa: Personas = { edad: 20 };
const Pedro: EdadNoEscribible = Luisa;

Luisa.edad++;

//object types extender tipos
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeUnDepartamento extends Direccion {
    unidad: string;
}

//objects types ectender multiples tipos
interface Computadoras {
    memoria2: string;
    procesador2: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadoras, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadoras, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
};

const ubuntuServer: Servidor = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherneth",
};

//object types interesction type
interface Computadora2 {
    memoria3: string;
    procesador3: string;
    hdd3: string;
}

interface SistemasOperativo {
    so2: string;
    version2: string;
}

type Portatil2 = Computadora2 & SistemasOperativo;

const macbookPro2: Portatil2 = {    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    memoria3: "16G",
    procesador3: "intel",
    hdd3: "1TB",
    so2: "osx",
    version2: "catalina",
};

//OBJECT TYPES, INTERFACES VS INTERSECTIONS

//object types generics
interface Caja {
    contenido: any;
}

let x: Caja = {
    contenido: "hola mundo",
};

if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}

console.log((x.contenido as string).toLocaleLowerCase);

//generics
interface Cajas<T> {
    contenido: T;
}

let cajaDeString: Cajas<string> = { contenido: "hola mundo" };
let cajaDeNumero: Cajas<number> = { contenido: 100 };
let cajaDeFecha: Cajas<Date> = { contenido: new Date() };

interface Cajita<T> {
    contenido: T;
}

let cajaDeString2: Cajita<string> = { contenido: "hola mundo" };
let cajaDeNumero2: Cajita<number> = { contenido: 100 };
let cajaDeFecha2: Cajita<Date> = { contenido: new Date() };

//objects types array type
const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
};

const misTareas: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);

//object types readonly array type
const miLista: ReadonlyArray<string> = ["a", "b", "c"];

//object types tupeles
type Autos = [string, number];

const prius: Autos = ['Toyota', 2015]
const civic: Autos = ['Honda', 2016]

console.log('El prius es marca: ', prius[0], ' y modelo: ', prius[1])
console.log('EL civic es marca: ', civic[0], ' y modelo: ', civic[1])

//Rest tuples 
type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true];

//readonly tuples
type Autoz = readonly [string, number];

const priuz: Autoz = ["Toyota", 2014];
=======
//tipado
const rectangulo = { altura: 10, anchura: 15 };
const area = rectangulo.altura * rectangulo.anchura;
console.log(area);

//function
function saludar(nombre) {
    return "Hola , " + nombre;

}

console.log(saludar("Geovanny"));

//let
let esVerdadero = true;
console.log(esVerdadero);

//numbers
let decimal: number = 18;
let hexa: number = 0x000040;
let octa: number = 0o20;
let bin: number = 0b0111;

console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);

//strings
let nombre: string = "Brandon";
let apellido: string = "Lau";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

console.log(impresion);

//arreglos
let listaDeNumeros: number[] = [1, 2, 3];
console.log(listaDeNumeros);

let listaDeNumeros2: Array<number> = [1, 2, 3];
console.log(listaDeNumeros2);

//tuples
let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

//enums
enum MarcasDeAutos {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;

console.log(tacoma);
console.log(MarcasDeAutos[0]);

//Any
let variablesSinTipo: any = 'Hola Profe';
variablesSinTipo = 100;

console.log(variablesSinTipo);

//unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;

console.log(valorDesconocido);

//void
function saludar2(): void {
    console.log("Hola Mundo... cruel");
}

saludar2();

//null y undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

console.log(variableSinDefinir + " " + variableNula);
//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while (true) { }
}

//tipos objects
declare function crear(o: object): void;

crear({ prop: 0 })
crear(null);
crear(undefined);
crear([]);

//unions
function imprimirID(id: number | string) {
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirID(100.234234423);
imprimirID('este_es_mi_id');

//type asertions
let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;
let longitudDelString2: number = (<string>algunValor).length;

//functions
function saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludar3("Orlando");

function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//funciones anonimas
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//aliases
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada x es : ${punto.y}`);
}

imprimirCoordenada({ x: 10, y: 25 });

//tipos interfaces
interface Etiqueta {
    label: string;
}

function imprimirEtiqueta(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);

//propiedades opcionales
interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area }
}

crearCuadrado({ ancho: 10 });

//propiedades de solo lectura
interface Punto2 {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto = { x: 10, y: 20 };
punto1.x = 20;

//tipos, interfaces vs types
interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
}

//extender interface
interface Auto extends Transporte {
    ruedas: number;
}

//extender un type
type Cuadrado2 = Figura & {
    lados: 4;
}

//tipos literales
function imprimir(estadoCivil: 'soltero' | 'casado') {
    console.log(estadoCivil)
}

imprimir('soltero');

//funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn("hola mundo");
}

function imprimirconsola(s: string) {
    console.log(s)
}

saludar4(imprimirconsola);

//funciones contructor signature
interface Transporte {
    nombre: string;
}
class caballo implements Transporte {
    constructor(public nombre: string) { }
}
class Automovil implements Transporte {
    constructor(public nombre: string) { }
}
type ConstructorDeTransporte = {
    new(nombre: string): Transporte;
};
function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}

const miCaballo = construirTransporte(caballo, "Caballito");
const miAutomovil = construirTransporte(Automovil, "Honda");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);

//funciones parametros opcionales
function f(n: number) {
    console.log(n.toFixed());       //no se especifia argumento
    console.log(n.toFixed(3));      // se especifica un argumento
}

function f2(n?: number) {
    // ...
}

//parametros opcionales en los callbacks
function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
} function miIterador2(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        // aqui es donde index es opcional o no
        callback(arr[i]);
    }
}

//funciones overload
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}

console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));

//funcion simplificada con unions
function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5,]));

//funciones uso de this
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

//funciones rest parameters
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

//funciones parameter destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}

const numeros = { a: 1, b: 2, c: 3 };

console.log(sumar(numeros));

function sumar2({ a, b, c }): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, x: 3 }));

//objects types()
function saludar5(persona: { nombre: string; edad: number }) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar5({ nombre: "Luis", edad: 22 }));

interface Persona {
    nombre: string;
    edad: number;
}

function saludar6(persona: Persona) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar6({ nombre: "Elena", edad: 25 }));

type Persona2 = {
    nombre: string;
    edad: number;
}

function saludar7(persona: Persona2) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar7({ nombre: "Anabel", edad: 30 }));

//object types property modifiers  propiedades opcionales
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir2(computador: Computadora) {
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir2({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});

//object types readonly properties
interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: "Shitzu" };

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

interface Personas {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}

const Luisa: Personas = { edad: 20 };
const Pedro: EdadNoEscribible = Luisa;

Luisa.edad++;

//object types extender tipos
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeUnDepartamento extends Direccion {
    unidad: string;
}

//objects types ectender multiples tipos
interface Computadoras {
    memoria2: string;
    procesador2: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadoras, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadoras, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
};

const ubuntuServer: Servidor = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherneth",
};

//object types interesction type
interface Computadora2 {
    memoria3: string;
    procesador3: string;
    hdd3: string;
}

interface SistemasOperativo {
    so2: string;
    version2: string;
}

type Portatil2 = Computadora2 & SistemasOperativo;

const macbookPro2: Portatil2 = {    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    memoria3: "16G",
    procesador3: "intel",
    hdd3: "1TB",
    so2: "osx",
    version2: "catalina",
};

//OBJECT TYPES, INTERFACES VS INTERSECTIONS

//object types generics
interface Caja {
    contenido: any;
}

let x: Caja = {
    contenido: "hola mundo",
};

if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}

console.log((x.contenido as string).toLocaleLowerCase);

//generics
interface Cajas<T> {
    contenido: T;
}

let cajaDeString: Cajas<string> = { contenido: "hola mundo" };
let cajaDeNumero: Cajas<number> = { contenido: 100 };
let cajaDeFecha: Cajas<Date> = { contenido: new Date() };

interface Cajita<T> {
    contenido: T;
}

let cajaDeString2: Cajita<string> = { contenido: "hola mundo" };
let cajaDeNumero2: Cajita<number> = { contenido: 100 };
let cajaDeFecha2: Cajita<Date> = { contenido: new Date() };

//objects types array type
const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
};

const misTareas: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);

//object types readonly array type
const miLista: ReadonlyArray<string> = ["a", "b", "c"];

//object types tupeles
type Autos = [string, number];

const prius: Autos = ['Toyota', 2015]
const civic: Autos = ['Honda', 2016]

console.log('El prius es marca: ', prius[0], ' y modelo: ', prius[1])
console.log('EL civic es marca: ', civic[0], ' y modelo: ', civic[1])

//Rest tuples 
type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true];

//readonly tuples
type Autoz = readonly [string, number];

const priuz: Autoz = ["Toyota", 2014];
>>>>>>> 67dbbead946bc3d345cbaa71e3b924ab73d06e95
