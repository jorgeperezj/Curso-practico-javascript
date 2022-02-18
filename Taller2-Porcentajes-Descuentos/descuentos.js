//Funciones para los calculos de los porcentajes.

function calcularValorConDescuento(valorInicial, descuento){
	const porcentajePagar = 100 - descuento;
	const valorConDescuento = (valorInicial * porcentajePagar) / 100;

	return valorConDescuento;
}

function getValoresEntrada(){
	const inputValor = document.getElementById("valorInicial").value;
	const inputDescuento = document.getElementById("descuento").value;

	const valorTotal = calcularValorConDescuento(inputValor, inputDescuento);

	document.getElementById("returnMensaje").innerText = "El precio con descuento es: $" + valorTotal
}