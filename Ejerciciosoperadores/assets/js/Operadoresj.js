const a = 5;
const b = 3;
const c = 12;


function primera() {
    var op = a > 3;
    document.getElementById("1").innerHTML = "El resultado es " + op;
};
primera();

function segunda() {
    var op = a > c;
    document.getElementById("2").innerHTML = "El resultado es " + op;
};
segunda();

function tercera() {
    var op = a < c;
    document.getElementById("3").innerHTML = "El resultado es " + op;
};
tercera();

function cuarta() {
    var op = b < c;
    document.getElementById("4").innerHTML = "El resultado es " + op;
};
cuarta();

function quinta() {
    var op = b != c;
    document.getElementById("5").innerHTML = "El resultado es " + op;
};
quinta();

function sexta() {
    var op = a == 3;
    document.getElementById("6").innerHTML = "El resultado es " + op;
};
sexta();

function septima() {
    var op = a * b == 15;
    document.getElementById("7").innerHTML = "El resultado es " + op;
};
septima();

function ocho() {
    var op = a * b == -30;
    document.getElementById("8").innerHTML = "El resultado es " + op;
};
ocho();

function nueve() {
    var op = c / b < a;
    document.getElementById("9").innerHTML = "El resultado es " + op;
};
nueve();

function diez() {
    var op = c / b == -10;
    document.getElementById("10").innerHTML = "El resultado es " + op;
};
diez();

function once() {
    var op = c / b == -4;
    document.getElementById("11").innerHTML = "El resultado es " + op;
};
once();

function doce() {
    var op = a + b + c == 5;
    document.getElementById("12").innerHTML = "El resultado es " + op;
};
doce();

function prohibido() {
    var op = (a + b == 8) && (a - b == 2);
    document.getElementById("13").innerHTML = "El resultado es " + op;
};
prohibido();

function catorce() {
    var op = (a + b == 8) || (a - b == 6);
    document.getElementById("14").innerHTML = "El resultado es " + op;
};
catorce();

function quince() {
    var op = a > 3 && b > 3 && c < 3;
    document.getElementById("15").innerHTML = "El resultado es " + op;
};
quince();

function diezseis() {
    var op = a < 3 && b >= 3 && c < -3;
    document.getElementById("16").innerHTML = "El resultado es " + op;
};
diezseis();
