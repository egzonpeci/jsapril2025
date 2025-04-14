

let mosha = prompt("Mosha juaj");

if (mosha >= 18) {
    //pjesa e cila ekzekutohet kur condition = true
    // document.writeln("<h1>Brenda if st.</h1>")
    document.writeln("<h1>Mund te filloni me aplikimin</h1>")
}
else {
    // document.writeln("<h1>Brenda if st por me else.</h1>")
    document.writeln("<h1>Mosha juaj nuk lejohet per aplikim</h1>")
}


let a = 40, b = 50, c = 7;

// if (a < b) {
//     if (a < c) {

//     }
// }

if (a < b && a < c) {
    document.writeln("<h1>a e ka vleren miniale</h1>")
}
else if (b < c) {
    document.writeln("<h1>b e ka vleren miniale</h1>")
}
else {
    document.writeln("<h1>c e ka vleren miniale</h1>")
}






// if (b < c && b < a) {
//     document.writeln("<h1>a e ka vleren miniale</h1>")
// }


//detyre
//nese vlera aktuale eshte prej >50 - 65 vleren aktuale e rrisim per
//10
//nese eshte me shume se 75 e zbresim per 10


let value_1 = 56;

if (value_1 >= 50 && value_1 <= 65) {

    if (value_1 == 55) {
        value_1 = value_1;
    }
    else {
        // value_1 += 10;
        value_1 = value_1 + 10;
    }
}
else if (value_1 > 75) {
    value_1 = value_1 - 10;
}
else {
    //nje mesazh tjeter
}

document.writeln("<h1>Rzultati per value_1: " + value_1 + "</h1>");


//vleresimi me note ne baze te pikeve ne provim
//50 - 60 pike => nota 6
//60 - 69  => 7
//70 - 79 => 8
//80 - 89 => 9
//90 - 100 =>10

let piket = prompt("Piket ne provim");

if (piket >= 50 && piket < 60) {
    document.writeln("<h1>Nota 6</h1>");
}
else if (piket >= 60 && piket <= 69) {
    document.writeln("<h1>Nota 7</h1>");
}
else if (piket >= 70 && piket <= 79) {
    document.writeln("<h1>Nota 8</h1>");
}



//switch

let gjinia = "F";

switch (gjinia) {
    default:
        document.writeln("<h2>Asnje nga rastet</h2>")
        break;
    case "Femer":
        document.writeln("<h1>Femer paSakte</h1>")
        break;
    case "F":
        document.writeln("<h1>Femer sakte</h1>")
        break;
    case "M":
    case "Mashkull":
        document.writeln("<h1>gjinia mashkull</h1>")
        break;
}
