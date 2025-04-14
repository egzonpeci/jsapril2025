// alert("Mire se keni ardhe");
// alert("tjeter test");

document.writeln("tash jemi duke shkruar ne dokument");
document.writeln("<h1>tash jemi duke shkruar ne dokument</h1>");

console.log("Pjesa e shkruar ne console");

// prompt("Sa eshte mosha juaj");

//variblat

var x = "Sot eshte dite e Hene";
var x = 45;
// alert(x);

let y = "variabel si let";
y = 12;
y = "ewlvkslfkds";

const pi = 3.14;
// pi = 45;

let val1 = 3, val2 = 4, val3 = 5;
// let y = " test";


//operatoret aritmetikore

let a = 4, b = 4;

document.writeln("<h4>Shuma e llog = " + (a + b) + "</h4>");
document.writeln("<h4>Zbritja e llog = " + (a - b) + "</h4>");
document.writeln("<h4>Shumezimi i llog = " + (a * b) + "</h4>");
document.writeln("<h4>Pjestimi i llog = " + (a / b) + "</h4>");
document.writeln("<h4>Moduli i llog = " + (a % b) + "</h4>");
document.writeln("<h4>Eksponenti i llog = " + (a ** b) + "</h4>");
document.writeln("<h4>Inkrementi me prefiks = " + (++b) + "</h4>");
document.writeln("<h4>Inkrementi me postfiks = " + (b++) + " vlera e b " + b + "</h4>");
document.writeln("<h4>Dekrementi me prefiks = " + (--b) + "</h4>");
document.writeln("<h4>Dekrementi me postfiks = " + (b--) + " vlera e b " + b + "</h4>");

//Forma te shkurtera per ndarje te vleres

// b+=10 <=> b = b + 10;
// a*=100 <=> a = a * 100


a = 5, b = "4";

//Operatoret krahasimore
// a==b (vetem permbajten)
document.writeln("<h3>" + (a == b) + "</h3>")
// a===b (permbajten dhe tipin)
document.writeln("<h3>" + (a === b) + "</h3>")
// a!=b (ndryshueshme ne permbajtje)
document.writeln("<h3>" + (a != b) + "</h3>")
// a!==b (ndryshueshme permbajtje dhe ne tip)
document.writeln("<h3>" + (a !== b) + "</h3>")
// a>b (me e madhe)
document.writeln("<h3>" + (a > b) + "</h3>")
// a<b (me e vogel)
document.writeln("<h3>" + (a < b) + "</h3>")
// a>=b (me e madhe ose e barabarte)
document.writeln("<h3>" + (a >= b) + "</h3>")
// a<=b (me e vogel ose e barabarte)
document.writeln("<h3>" + (a <= b) + "</h3>")

let res = a > 1 ? a == 4 ? "a ka vleren 4" : "a ka vleren jo 4" : "kur kushti osht i pa sakte";
document.writeln("<h1>" + res + "</h1>")



//Operatoret logjike

let val_1 = 5, val_2 = 7;


//oper. logjike dhe &&
document.writeln("<h2>" + (val_1 > 2 && val2 > 4) + "</h2>")

//oper. logjike ose ||
document.writeln("<h2>" + (val_1 > 2 || val2 > 4) + "</h2>")

//opert. logjike not(jo) !
document.writeln("<h6>" + (!(a > 1)) + "</h6>");


// let rez_1 = kushti ? true : false;

let rez_2 = !(7 > 90) ? "Vlera e sakte" : "Vlere jo e sakte";
document.writeln("<h2>Rez: " + rez_2 + "</h2>");










