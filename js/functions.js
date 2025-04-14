function function_name() {
}
function new_function(param1, param2) {
    return param1 + param2;
}


function SumCalculated(a, b) {
    document.writeln(`<h4>Shuma ${a + b}</h4>`);
}


SumCalculated(2, 3);
SumCalculated(20, 3);
SumCalculated(209, 3);



function ShowMsg(msg, css_class) {
    document.writeln(`<h1 class="${css_class}">${msg}</h1>`);
}

ShowMsg("Sot jemi duke mesuar per funksionet", "text-red");


hello = (a) => "Arrow function" + a;

document.writeln(hello(2));


//async function

async function asyncFunction() {
    document.writelns("test");
    return "Brenda async function 12";
}

function asyncFunction() {
    try {
        document.writeln("test");
        // return "Brenda async function 12";
    } catch (error) {
        document.writeln(error)
    }
}

// async function getValue() {
//     let val = await asyncFunction();
//     console.log(val);
// }

// asyncFunction().then(val => console.log(val)).catch(error => console.log(error));



// getValue();

asyncFunction();


ShowMsg("Sot jemi duke mesuar per funksionet testttt", "text-red");

//shembull me operator aritmetikore


function GetArithmeticOperator(value_1, value_2, operator) {
    let result = '';
    switch (operator) {
        case "+":
            result = `<h4>Shuma e llog:  ${value_1 + value_2}<h4>`;
            break;
        case "-":
            result = `<h4>Zbritja e llog:  ${value_1 - value_2}<h4>`;
            break;
        case "x":
            result = `<h4>Prodhimi i llog:  ${value_1 * value_2}<h4>`;
            break;
        case "/":
            result = `<h4>Pjestimi i llog:  ${value_1 / value_2}<h4>`;
            break;
        default:
            result = '<h4>Gabim Operatori</h4>'
            break;
    }
    document.writeln(result);
}


GetArithmeticOperator(3, 5, "+");
GetArithmeticOperator(3, 5, "-");
GetArithmeticOperator(3, 5, "x");
GetArithmeticOperator(3, 5, "/");

//arrays

// let studentName = "Deniz";
// let studentLastName = "Qeza";
// let studentCity = "Vushtrri";
//pozita e ant.       0         1         2
let student_data = ["Deniz", "Qeza", "Vushtrri"];
document.writeln(student_data[3]);





