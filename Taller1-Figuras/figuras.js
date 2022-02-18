// Código del cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")

function perimetroCuadrado (lado){
	return lado * 4;
}

// const areaCuadradro = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadradro + "cm^2")

function areaCuadradro (lado){
	return lado * lado;
}
console.groupEnd();


// Código del triángulo

console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.")
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo (lado1, lado2, base){
	return lado1 + lado2 + base
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm")

function areaTriangulo (base, altura){
	return base * altura / 2;
}

// console.log("El área del triángulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

// Código del Circulo

console.group("Círculos");
//Radio del círculo
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm")

//Diametro del círculo
function diametroCirculo (radio){
	return radio * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + "cm")

//Inicializando PI
const PI = Math.PI;
// console.log("Pi: " + PI);

//Perímetro del círculo
function perimetroCirculo (radio){
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm")

//Área del círculo
function areaCirculo (radio){
	return radio * radio * PI;
}

// console.log("El área del círculo es: " + areaCirculo + "cm^2")
console.groupEnd();


//Funciones llamadas de la vista html
//Cuadrado

function calcularPerimetroCuadrado (){
	const lado = parseInt(document.getElementById("ladoCuadrado").value);
	const perimetro = perimetroCuadrado(lado);

	document.getElementById("respuestaCuadrado").value = perimetro + " cm";;
}

function calcularAreaCuadrado (){
	const lado = parseInt(document.getElementById("ladoCuadrado").value);
	const area = areaCuadradro(lado);

	document.getElementById("respuestaCuadrado").value = area + " cm2";
}

//Triangulo

function calcularPerimetroTriangulo (){
	const lado1 = parseInt(document.getElementById("ladoTriangulo1").value);
	const lado2 = parseInt(document.getElementById("ladoTriangulo2").value);
	const base = parseInt(document.getElementById("baseTriangulo").value);
	
	var perimetro = 0;
	perimetro = perimetroTriangulo(lado1, lado2, base);

	document.getElementById("respuestaTriangulo").value = perimetro + " cm";;
}

function calcularAreaTriangulo (){
	const base = parseInt(document.getElementById("baseTriangulo").value);
	const altura = parseInt(document.getElementById("alturaTriangulo").value);
	
	area = areaTriangulo(base, altura);

	document.getElementById("respuestaTriangulo").value = area + " cm2";
}

//Círculo

function calcularPerimetroCirculo (){
	const radio = parseInt(document.getElementById("radioCirculo").value);
	const perimetro = perimetroCirculo(radio);

	document.getElementById("respuestaCirculo").value = perimetro.toFixed(2) + " cm";;
}

function calcularAreaCirculo (){
	const radio = parseInt(document.getElementById("radioCirculo").value);
	const area = areaCirculo(radio);

	document.getElementById("respuestaCirculo").value = area.toFixed(2) + " cm2";
}

function calcularDiametroCirculo(){
	const radio = parseInt(document.getElementById("radioCirculo").value);
	const diametro = diametroCirculo(radio);

	document.getElementById("respuestaCirculo").value = diametro + " cm";
}