let i = 9;
while (++i < 10) {
    document.writeln("<p> " + (i + 1) + ". Paragrafi</p>");
    // i++;
}


let j = 1;
while (j <= 6) {
    document.writeln("<h" + j + ">Heading " + j + "</h" + j + ">");
    j++;
}

let n = 8;
let k = 1;
while (k <= 10) {
    document.writeln("<p>" + n + " x " + k + " = " + (n * k) + "</p>");
    k++;
}


let z = 0;
do {
    document.writeln("<h3>Brenda loop-es DoWhile</h3>");
    z++;
} while (z < 10);


for (let index = 0; index < 5; index++) {
    document.writeln("<h4>Brenda loop-es for</h4>");
    index = 4;
}

for (let i = 1; i <= 10; i++) {

    document.writeln(`<h4>Tbl me ${i}</h4>`)
    for (let j = 1; j <= 10; j++) {

        document.writeln(`<p>${i} x ${j} = ${i * j}</p>`);

    }

}


//shembull me 3 numrat e mesem te veturave


for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let z = 0; z < 10; z++) {

            document.writeln(`<h4>01 - ${i}${j}${z} - DD</h4>`)
        }
    }
}


//break & continue statements

for (let index = 0; index < 10; index++) {
    if (index == 4)
        continue;
    document.writeln(`<h1>${index}</h1>`);

    for (let j = 0; j < 10; j++) {
        if (j == 0)
            break;
    }
}


//numrat tek

for (let index = 0; index < 1000; index++) {
    if (index % 2 == 1)
        continue;
    document.writeln(index);
}

//shuma e numrave prej 0 - 100

let sum = 0;

for (let index = 0; index <= 5; index++) {
    sum += index;
}
alert(sum);



