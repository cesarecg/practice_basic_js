// Código del Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado miden: " + perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado +"cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm," 
    + ladoTriangulo2 
    + "cm," 
    + baseTriangulo 
    + "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del Triángulo mide: " + alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.groupEnd();

// Código del crculo
console.group("´Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo *2;

//PI
const PI = Math.PI;
console.log("PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;

//área
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.groupEnd();