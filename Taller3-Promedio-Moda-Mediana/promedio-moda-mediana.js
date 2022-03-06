function stringToNumber(lista){
	let newLista = [];
	for (var i = 0; i < lista.length; i++) {
		newLista.push(Number(lista[i]));
	}
	return newLista;
}

//Funciones para los calculos de Promedio.

function getInputPromedio () {
	let listaInput = document.getElementById("listaPromedio").value;
	let listaString = listaInput.split([","]);
	let lista = stringToNumber(listaString);
	let results = calcularMediaAritmetica(lista);
	document.getElementById("resultProm").value = results;
}

function calcularMediaAritmetica (lista) {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista += lista[i];
	// }

	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);

	return sumaLista / lista.length;
}


//Funciones para los calculos de Mediana.

function getInputMediana () {
	let listaInput = document.getElementById("listaMediana").value;
	let listaString = listaInput.split([","]);
	let lista = stringToNumber(listaString);
	let results = calcularMediana(lista);
	document.getElementById("resultMedi").value = results;
}

function calcularMediana (listaInput) {

	const lista = listaInput.sort();

	const mitadLista = parseInt(lista.length / 2);

	function esPar (lista) {
		if (lista % 2 === 0) {
			return true;
		} else {
			return false;
		}
	}

	let mediana;

	if (esPar(lista.length)) {
		const elemento1 = Number(lista[mitadLista - 1]);
		const elemento2 = Number(lista[mitadLista]);
		const promedio = calcularMediaAritmetica([elemento1, elemento2]);
		mediana = promedio;

	} else {
		mediana = lista[mitadLista];
	}

	return mediana;
}


//Funciones para los calculos de Moda.

function getInputModa () {
	let listaInput = document.getElementById("listaModa").value;
	let listaString = listaInput.split([","]);
	let lista = stringToNumber(listaString);
	let results = calcularModa(lista);
	document.getElementById("resultModa").value = "La moda es: " + results[0] + " cantidad: " + results[1];
}

function calcularModa(lista) {

	const contarLista = {};

	lista.map(
		function(elemento){
			if(contarLista[elemento]){
				contarLista[elemento] += 1;	
			} else {
				contarLista[elemento] = 1;
			}
		}
	);

	const convertirArray = Object.entries(contarLista).sort(
		function (elementoA, elementoB) {
			return elementoA[1] - elementoB[1];
		}
	);

	return convertirArray[convertirArray.length - 1];
}
