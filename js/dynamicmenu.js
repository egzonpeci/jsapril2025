function GenerateLink(href, nameLink) {
    document.writeln(`<li class="nav-item">
           <a class="nav-link" href="${href}">${nameLink}</a>
       </li>`);
}


let pages = [
    ["index.html", "Ballina"],
    ["about.html", "Rreth Nesh"],
    ["index.html", "Ballina"],
    ["index.html", "Ballina"],
    ["https://cacttus.education", "Cacttus Education"]
]


for (let i = 0; i < pages.length; i++) {
    GenerateLink(pages[i][0], pages[i][1])
}



let points = [
    [4, 3, 5, 6, 8],
    [1, 3, 5, 6, 9],
    [2, 3, 4, 10, 8],
    [3, 3, 5, 3, 3],
    [4, 5, 6, 3, 8]
];



for (let i = 0; i < points.length; i++) {
    var sum_3 = 0;
    for (let j = 0; j < points[i].length; j++) {
        if (points[i][j] == 3)
            sum_3++;
    }
}

// document.writeln(`<h4>Nr. 3 => ${sum_3}</h4>`)

// console.log(sum_3);



let notat = [5, 7, 8, 9, 10, 4, 5, 6, 7];


let arrowFunction = () => "Sot eshte dite e mire";

console.log(arrowFunction());


let new_array = notat.filter(x => x > 7);

new_array.forEach(item => {
    console.log(item);
});

let sum3 = 0;
points.forEach(row => {
    sum3 += row.filter(y => y == 3).length;
    // console.log(row);
});

console.log(sum3);






