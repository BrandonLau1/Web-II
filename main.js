//tipado
var rectangulo = { altura: 10, anchura: 15 };
var area = rectangulo.altura * rectangulo.anchura;
console.log(area);
//function
function saludar(nombre) {
    return "Hola , " + nombre;
}
console.log(saludar("Geovanny"));
//let
var esVerdadero = true;
console.log(esVerdadero);
//numbers
var decimal = 18;
var hexa = 0x000040;
var octa = 16;
var bin = 7;
console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);
//strings
var nombre = "Brandon";
var apellido = "Lau";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log(impresion);
//arreglos
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros);
var listaDeNumeros2 = [1, 2, 3];
console.log(listaDeNumeros2);
//tuples
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//enums
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 100] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 102] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[0]);
//Any
var variablesSinTipo = 'Hola Profe';
variablesSinTipo = 100;
console.log(variablesSinTipo);
//unknown
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//void
function saludar2() {
    console.log("Hola Mundo... cruel");
}
saludar2();
//null y undefined
var variableSinDefinir = undefined;
var variableNula = null;
console.log(variableSinDefinir + " " + variableNula);
//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//unions
function imprimirID(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirID(100.234234423);
imprimirID('este_es_mi_id');
//type asertions
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
//functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Orlando");
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//funciones anonimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada x es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
//tipos literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
//funciones como expresiones
function saludar4(fn) {
    fn("hola mundo");
}
function imprimirconsola(s) {
    console.log(s);
}
saludar4(imprimirconsola);
var caballo = /** @class */ (function () {
    function caballo(nombre) {
        this.nombre = nombre;
    }
    return caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(caballo, "Caballito");
var miAutomovil = construirTransporte(Automovil, "Honda");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
//funciones parametros opcionales
function f(n) {
    console.log(n.toFixed()); //no se especifia argumento
    console.log(n.toFixed(3)); // se especifica un argumento
}
function f2(n) {
    // ...
}
//parametros opcionales en los callbacks
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
function miIterador2(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        // aqui es donde index es opcional o no
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//funcion simplificada con unions
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5,]));
//funciones uso de this
var usuario = {
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
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, x: 3 }));
//objects types()
function saludar5(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar5({ nombre: "Luis", edad: 22 }));
function saludar6(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar6({ nombre: "Elena", edad: 25 }));
function saludar7(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar7({ nombre: "Anabel", edad: 30 }));
function imprimir2(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir2({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luisa = { edad: 20 };
var Pedro = Luisa;
Luisa.edad++;
var macbookPro = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
};
var ubuntuServer = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherneth",
};
var macbookPro2 = {
    memoria3: "16G",
    procesador3: "intel",
    hdd3: "1TB",
    so2: "osx",
    version2: "catalina",
};
var x = {
    contenido: "hola mundo",
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase);
var cajaDeString = { contenido: "hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
var cajaDeString2 = { contenido: "hola mundo" };
var cajaDeNumero2 = { contenido: 100 };
var cajaDeFecha2 = { contenido: new Date() };
//objects types array type
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas);
//object types readonly array type
var miLista = ["a", "b", "c"];
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log('El prius es marca: ', prius[0], ' y modelo: ', prius[1]);
console.log('EL civic es marca: ', civic[0], ' y modelo: ', civic[1]);
var a = ["a", 1, true, false, true];
var priuz = ["Toyota", 2014];
//tipado
var rectangulo = { altura: 10, anchura: 15 };
var area = rectangulo.altura * rectangulo.anchura;
console.log(area);
//function
function saludar(nombre) {
    return "Hola , " + nombre;
}
console.log(saludar("Geovanny"));
//let
var esVerdadero = true;
console.log(esVerdadero);
//numbers
var decimal = 18;
var hexa = 0x000040;
var octa = 16;
var bin = 7;
console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);
//strings
var nombre = "Brandon";
var apellido = "Lau";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log(impresion);
//arreglos
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros);
var listaDeNumeros2 = [1, 2, 3];
console.log(listaDeNumeros2);
//tuples
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//enums
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 100] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 102] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[0]);
//Any
var variablesSinTipo = 'Hola Profe';
variablesSinTipo = 100;
console.log(variablesSinTipo);
//unknown
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//void
function saludar2() {
    console.log("Hola Mundo... cruel");
}
saludar2();
//null y undefined
var variableSinDefinir = undefined;
var variableNula = null;
console.log(variableSinDefinir + " " + variableNula);
//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//unions
function imprimirID(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirID(100.234234423);
imprimirID('este_es_mi_id');
//type asertions
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
//functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Orlando");
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//funciones anonimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada x es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
//tipos literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
//funciones como expresiones
function saludar4(fn) {
    fn("hola mundo");
}
function imprimirconsola(s) {
    console.log(s);
}
saludar4(imprimirconsola);
var caballo = /** @class */ (function () {
    function caballo(nombre) {
        this.nombre = nombre;
    }
    return caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(caballo, "Caballito");
var miAutomovil = construirTransporte(Automovil, "Honda");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
//funciones parametros opcionales
function f(n) {
    console.log(n.toFixed()); //no se especifia argumento
    console.log(n.toFixed(3)); // se especifica un argumento
}
function f2(n) {
    // ...
}
//parametros opcionales en los callbacks
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
function miIterador2(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        // aqui es donde index es opcional o no
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//funcion simplificada con unions
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5,]));
//funciones uso de this
var usuario = {
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
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, x: 3 }));
//objects types()
function saludar5(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar5({ nombre: "Luis", edad: 22 }));
function saludar6(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar6({ nombre: "Elena", edad: 25 }));
function saludar7(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar7({ nombre: "Anabel", edad: 30 }));
function imprimir2(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir2({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luisa = { edad: 20 };
var Pedro = Luisa;
Luisa.edad++;
var macbookPro = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
};
var ubuntuServer = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherneth",
};
var macbookPro2 = {
    memoria3: "16G",
    procesador3: "intel",
    hdd3: "1TB",
    so2: "osx",
    version2: "catalina",
};
var x = {
    contenido: "hola mundo",
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase);
var cajaDeString = { contenido: "hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
var cajaDeString2 = { contenido: "hola mundo" };
var cajaDeNumero2 = { contenido: 100 };
var cajaDeFecha2 = { contenido: new Date() };
//objects types array type
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas);
//object types readonly array type
var miLista = ["a", "b", "c"];
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log('El prius es marca: ', prius[0], ' y modelo: ', prius[1]);
console.log('EL civic es marca: ', civic[0], ' y modelo: ', civic[1]);
var a = ["a", 1, true, false, true];
var priuz = ["Toyota", 2014];
//# sourceMappingURL=main.js.map