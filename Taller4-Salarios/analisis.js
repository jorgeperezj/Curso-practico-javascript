// Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica (lista) {
	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);

	return sumaLista / lista.length;
}

// Funciones Calculando la mediana de salarios general
const salarioCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lenght)){
        const elemento1 = Number(lista[mitad - 1]);
        const elemento2 = Number(lista[mitad]);
        return calcularMediaAritmetica([elemento1, elemento2]);
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salarioColSorted);

// Funciones Calculando la mediana de salarios Top 10%

const spliceStart = (salarioColSorted.length * 90) /100;
const spliceCount = salarioColSorted.length - spliceStart;

const salariosColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

// Imprimir en consola
console.log(
    medianaGeneralCol,
    medianaTop10Col
);