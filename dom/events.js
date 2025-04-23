function generateAlert() {
    alert("test");
}

function dblFunction() {
    alert("sdsf");
}

function GetIdFromCities() {
    alert("duke klikuar ne ddl qytetet");
}


function getCurrentValue(objekti) {
    let vlera = objekti.value;
    alert(vlera);
}


function generateHtmlElement(obj) {
    let currentValue = obj.value;
    let htmlElement = '';
    for (let i = 0; i < currentValue; i++) {
        htmlElement += `<p>Paragrafi ${i + 1}  </p>`
    }
    document.getElementById("htmlelement").innerHTML = htmlElement;
}

function Calculation() {
    let a = parseFloat(document.getElementById("val_a").value);
    let b = parseFloat(document.getElementById("val_b").value);
    let operatori = document.getElementById("operator").value;
    let rez = "";

    switch (operatori) {
        case '+':
            rez = `Shuma e llog ${a + b}`;
            break;
        case '-':
            rez = `Zbritja e llog ${a - b}`;
            break;
        case 'x':
            rez = `Shumezimi i llog ${a * b}`;
            break;
        case '/':
            rez = `Pjestimi i llog ${a / b}`;
            break;
        default:
            rez = "Asnje nga operatoret";
            break;
    }

    document.getElementById("rez").innerText = rez;

}



//shtimi i eventeve permes metodes "fn" eventlistener


let getDataById = document.getElementById("eventlistener");

getDataById.addEventListener("click", function () {
    // alert("Test eventListener");
    this.style.color = "red";
})
// getDataById.addEventListener("dblclick", function (obj) {
//     obj.style.color = "red";
// })


//Create html element as dynamicall


let createElement = document.createElement("div");
let text = document.createTextNode("Testt");
createElement.appendChild(text);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

