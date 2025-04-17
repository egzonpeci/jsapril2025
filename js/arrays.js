let student = [1, 2, 3, "4", 5, 6, 7, 98, 9];
// document.writeln(student);

let array = [];
array[0] = "elementi 1";
array[1] = "elementi 2";
array[2] = "elementi 3";

// document.writeln(array);

var objArray = new Array(1, 3, "test");
// document.writeln(objArray);


// alert(student.length);

//mundeson me fshi elementin e fundit ne array
// student.pop();
// student.pop();

student.push("ne fund");


// student.shift();
student.unshift("ne fillim");

for (let index = 0; index < student.length; index++) {
    document.writeln(`<h4>Ant ${index + 1}: ${student[index]}</h4>`)
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, fruits.length, "New");
document.writeln(fruits);



const fruits_1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits_1.slice(1, 4);

document.writeln(citrus);


const points = [40, 100, 1, 5, 25, 10];

document.writeln(`<h3>
       

    ${points.sort(function (a, b) { return (a - b) })}
    
    </h3>`)



const piket = [2, 3, 4, 523, 12, 45, 3, 2, 56, 78, 9];

let newArray = piket.sort(function (a, b) { return a - b });

document.writeln(newArray[0]);
document.writeln(newArray[newArray.length - 1]);



//objeki

let objectData = [
    {
        "Id": 1,
        "Name": "Filan",
        "Address": "Prishtine"
    },
    {
        "Id": 210,
        "Name": "Filan",
        "Address": "Prishtine"
    }
]

let objectDataArray = [100, 250];

document.writeln(`<p>Te dhenat nga objekti: Emri :${objectData[0].Name}</p>`)


//array 2d

let students = [
    [1, 2, 3, 5, 6, 7, 89],
    [4, 5, 6],
    [7, 8, 9]
    // [71, 81, 91]
];


//leximi

for (let i = 0; i < students.length; i++) {

    students[i].push(10);
    for (let j = 0; j < students[i].length; j++) {
        // students[0].push(10);
        document.writeln(`${students[i][j]} `)
    }
    document.writeln("<br>")
    // students.push("10");
}

// alert(students.length);
// document.writeln(students[1][2]);


let value_1 = 4.6;
alert(Math.PI);

let value_2 = "4";
let value_3 = 3;

alert(parseFloat(value_3) + value_3);






















