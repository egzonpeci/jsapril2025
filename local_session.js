

document.getElementById("itemnr").innerText = localStorage.getItem("itemnr") == null ? 0 : localStorage.getItem("itemnr");


function createElementHtml() {
    let currentValue = localStorage.getItem("itemnr") == null ? 0 : Number.parseInt(localStorage.getItem("itemnr"));
    document.getElementById("element").innerHTML += "test <br>";
    localStorage.setItem("itemnr", ++currentValue);
    document.getElementById("itemnr").innerText = currentValue;
}

//localStorage


let userat = "lista e userave";
localStorage.setItem("users", userat)


let getDataFromStorage = localStorage.getItem("users");
document.writeln(`<h4>Emri i lexuar: ${getDataFromStorage}</h4>`);



function resetCounter() {
    localStorage.removeItem("itemnr");
    document.getElementById("itemnr").innerText = 0;
}

function changeColorTheme(nameColor) {
    document.getElementById("body").className = nameColor;
    localStorage.setItem("themeColor", nameColor);
}

document.getElementById("body").className = localStorage.getItem("themeColor_1") == null ? "bg-light" : localStorage.getItem("themeColor_1");

function changeColorToggle() {
    let getCurrentClass = document.getElementById("body").className;
    if (getCurrentClass == "bg-light") {
        colorName = document.getElementById("body").classList = "bg-dark";
    }
    else{
        colorName = document.getElementById("body").classList = "bg-light";
    }
    localStorage.setItem("themeColor_1", colorName);
}