//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del NUmero Secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica Un Numero del 1 al 10.';

// Inicializa la variable 'numeroSecreto' con el valor 0. Este número será el que los jugadores intentarán adivinar.
let numeroSecreto = 0;

// Inicializa la variable 'intentos' con el valor 0. Esta variable contará el número de intentos realizados por el jugador.
let intentos = 0;

// Inicializa la variable 'ListaNumerosSorteados' como un array vacío. Esta lista almacenará los números sorteados o intentados por el jugador.
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

let maximosintentos =3;

/*
ahora vamos a reducir las lineas de codigo realizando una funcion generica  
*/
function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}

function verificarIntento() {
	let numeroDeUsuario = parseInt(document.getElementById('IdImputvalorUsuario').value);

	console.log(numeroSecreto);

	if (numeroDeUsuario === numeroSecreto) {
		// Asigna un texto a un elemento 'p'. El texto incluye el número de intentos y se ajusta según si fue un intento o varios.
		asignarTextoElemento('p', `Acertaste, Lo lograste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);

		// Habilita el botón con el ID 'reiniciar' removiendo el atributo 'disabled'.
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		//el usuario no acerto
		if (numeroDeUsuario > numeroSecreto ) {
			asignarTextoElemento('p', 'El numero secreto es Menor');
		} else {
			asignarTextoElemento('p', 'El numero secreto es Mayor');
		}

		
		intentos++; // el contador se incrementa cada vez que el usuario no acierta

		LimpiarCaja(); // se llama la funcion limpiar caja cuando el usuario no acierta
	}

	
	return;
}


/*
//crear una funcion en javascript
function verificarIntento() {
// Obtiene el valor del elemento con el id 'IdImputvalorUsuario', lo convierte a un número entero y lo almacena en la variable 'numeroDeUsuario'
let numeroDeUsuario = parseInt(document.getElementById('IdImputvalorUsuario').value); 

// Imprime en la consola el tipo de dato de la variable 'numeroDeUsuario', esto es para verificar que la conversión a número entero se haya realizado correctamente
console.log(typeof(numeroDeUsuario)); 

// Imprime en la consola el valor de la variable 'numeroSecreto', que debe estar definida en algún lugar del código
console.log(numeroSecreto);

// Imprime en la consola el tipo de dato de la variable 'numeroSecreto' para asegurarse de que sea del mismo tipo que 'numeroDeUsuario' para una comparación adecuada
console.log(typeof(numeroSecreto));

// Imprime en la consola el valor de 'numeroDeUsuario' para verificar qué número ingresó el usuario
console.log(numeroDeUsuario);

// Compara 'numeroDeUsuario' con 'numeroSecreto' y imprime en la consola el resultado de la comparación (true o false), para verificar si el número ingresado por el usuario coincide con el número secreto
console.log(numeroDeUsuario == numeroSecreto);

    return;
}
*/

/*
funcion limpiar caja (limpiar el imput)
function LimpiarCaja() {
   let valorCaja = document.querySelector('#IdImputvalorUsuario');
   valorCaja.value = '';
} 
   */

function LimpiarCaja() {
	document.querySelector('#IdImputvalorUsuario').value = '';
}

function generarNumeroSecreto() {
	// Genera un número aleatorio entre 1 y 10 (ambos inclusive).
	let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

	console.log(numeroGenerado);
	console.log(ListaNumerosSorteados);

	if (ListaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');

    }else{
		// Verifica si el número generado ya está en la lista de números sorteados.
		if (ListaNumerosSorteados.includes(numeroGenerado)) {
			// Si el número generado está en la lista, llama de nuevo a la función 'generarNumeroSecreto' para generar otro número.
			return generarNumeroSecreto();
		} else {
			// Si el número generado no está en la lista, agrega el número a la lista de números sorteados.
			ListaNumerosSorteados.push(numeroGenerado);
			// Devuelve el número generado.
			return numeroGenerado;
		}
	}
}

function condicionesIniciales() {
	asignarTextoElemento('h1', 'Juego del numero secreto!');
	asignarTextoElemento('p', `Indica un numero del  1 al ${numeroMaximo}.`);
	numeroSecreto = generarNumeroSecreto();
	intentos = 1;
}

function reiniciarJuego() {
	// limpiar caja
	LimpiarCaja();

	//indicar mesaje de intervalo de numeros
	condicionesIniciales();

	//generar numero aleatorio
	//deshabilitar el boton de nuevo juego
	//inicializar el numero de intentos
	//inicializar el numero de intentos

	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

/* nota. aqui se llama la funcion, tener encuenta que una funcion se puede llamar
desde cualquier linea  parte del codigo.

*/
