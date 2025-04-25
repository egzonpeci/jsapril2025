let students = [
    {
        Id: 1,
        Name: "Filan",
        Mosha: function () {
            return 23;
        }
    },
    {
        Id: 2,
        Name: "Filan_2"
    }
];

let stundets = {

    Qytetet: [

    ]
};

console.log(students[0].Mosha());


let sliders_1 = [
    {
        id: 1,
        sliderurl: "https://www.w3schools.com/bootstrap5/la.jpg",
        title: "Slider"
    },
    {
        id: 2,
        sliderurl: "https://www.w3schools.com/bootstrap5/chicago.jpg",
        title: "Slider"
    },
    {
        id: 3,
        sliderurl: "https://www.w3schools.com/bootstrap5/ny.jpg",
        title: "Slider"
    },
    {
        id: 4,
        sliderurl: "https://www.w3schools.com/bootstrap5/la.jpg",
        title: "Slider"
    }
];







let allinone = {
    headerTitle: {
        id: 34,
        title: "Titulli ne balline"
    },

    sliders:
        [
            {
                id: 1,
                sliderurl: "https://www.w3schools.com/bootstrap5/la.jpg",
                title: "Slider"
            },
            {
                id: 2,
                sliderurl: "https://www.w3schools.com/bootstrap5/chicago.jpg",
                title: "Slider"
            },
            {
                id: 3,
                sliderurl: "https://www.w3schools.com/bootstrap5/ny.jpg",
                title: "Slider"
            },
            {
                id: 4,
                sliderurl: "https://www.w3schools.com/bootstrap5/la.jpg",
                title: "Slider"
            }
        ],

    about: {
         description:"<h1>Kjo eshte faqja jone  test 1212</h1>"
    }
}


console.log(allinone);

let htmlSliders = '';
allinone.sliders.map(item => {
    let activeClass = item.id == 1 ? "active" : "";
    htmlSliders += `<div class="carousel-item ${activeClass} ">
                        <img src="${item.sliderurl}" alt="Los Angeles" class="d-block w-100">
                </div>`;
});

document.getElementById("sliders").innerHTML = htmlSliders;
document.getElementById("header-title").innerText = allinone.headerTitle.title;
document.getElementById("about").innerHTML = allinone.about.description;









