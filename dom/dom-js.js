//elementin ne baze te ID-se

let getElementById = document.getElementById("about");
getElementById.innerHTML += "<h4>Heading 4 i shtuar</h4>";
console.log(getElementById.innerHTML);
console.log(getElementById.innerText);
console.log(getElementById.outerHTML);

let _contactById = document.getElementById("contact");
_contactById.innerHTML = getElementById.innerHTML;

// let getElementById_ = ["html", "text", "class"];



//get elements by class
let _getElementsByClassName = document.getElementsByClassName("text-red");
// _getElementsByClassName[0].hidden = true;
// _getElementsByClassName[0].getAttribute("egzon");
// console.log(_getElementsByClassName[0].getAttribute("egzon"));

for (let i = 0; i < _getElementsByClassName.length; i++) {
    _getElementsByClassName[i].className += ' bg-red';
    _getElementsByClassName[i].style.color = 'white';
    _getElementsByClassName[i].style.fontSize = '40px';
}

//get elements by tag name

let getElementsByTagName = document.getElementsByTagName("p");
console.log(getElementsByTagName);



//querySelector

let _getByQuerySelector = document.querySelector("#about");
_getByQuerySelector.innerHTML = "E nderruar me querySelector";

//querySelectorAll

let _getByQuerySelectorAll = document.querySelectorAll(".text-red");
_getByQuerySelectorAll[0].className = " nderruar me query ";

