/*Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/


// Variables anteriores
var Nombre = "Amanda";
var Apellido = "Rivera";
var usuarioESPE = "arivera4";
var Edad = 25;
var correoElectronico = "arivera4@esepe.edu.ec";
var mayorEdad = true;
var dineroAhorrado = 2341.13;
var deuda = 745.12;

//  Nombre completo calculado
var nombreCompleto = Nombre + " " + Apellido;

//  Dinero real calculado
var dineroReal = dineroAhorrado - deuda;

// variables calculadas
console.log("Nombre completo: " + nombreCompleto);
console.log("Dinero real: " + dineroReal);
