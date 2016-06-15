// función “constructora”
function Telefono(nombre, numero, marca, color, contador){
this.nombre = nombre;
this.numero = numero;
this.marca = marca;
this.color = color;
this.contador = contador;
var contador = 0;
}


//Voy a agregar un método al prototipo Persona
Telefono.prototype.marcar = function(){
var numero = prompt ("Escribe tu numero");
return 'Hola, mi numero es ' + this.numero;
console.log(contador+1);
};



//Creo una nueva instancia de Persona con “new”
var ceci = new Telefono('Ceci', 8120750087, Samsung, Blanco, 0);
console.log(ceci.numero());
a
function Contacto(nombre){
Telefono.nombre(this,nombre);
this.nombre = "Ceci";
}
var ceci = new Telefono('Ceci');
console.log(ceci.nombre);
console.log(ceci.numero);
console.log(ceci.marca);
console.log(ceci.color);
console.log(ceci.contador);