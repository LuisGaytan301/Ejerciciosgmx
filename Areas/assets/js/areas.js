alert("Area para varias figuras geometricas");
var figura = prompt("Elige la figura: cuadrado, triangulo, circulo, rectangulo")

switch (figura) {
    case "cuadrado":
        let lado1 = prompt("Ingresa lado del cuadrado");
        let areac = lado1 * lado1;
        alert("El area es: " + areac);
        break;
    case "triangulo":
        let base = prompt("Ingresa base del triangulo");
        let altura = prompt("Ingresa altura del triangulo");
        let areat = base * altura / 2
        alert("El area del triangulo es: " + areat);
        break;
    case "circulo":
        let pi = 3.1416
        let radio = prompt("Ingrese el radio del circulo");
        let areaci = pi * radio ** 2;
        alert("El area del circulo es: " + areaci);
        break;
    case "rectangulo":
        let baser = prompt("Ingrese base del rectangulo");
        let alturar = prompt("ingrese altura del rectangulo");
        let arear = baser * alturar;
        alert("El area del rectangulo es: " + arear);
        break;
}