// $("selector").action(function () {
// });


$(document).ready(function () {
    $("#btn-hide").click(function () {
        // alert("test");
        $("p").hide();
    });


    $(document).on("click", "p", function () {
        alert("test");
    });

    function generateElements() {
        let htmlData = '';
        for (let index = 0; index < 10; index++) {
            htmlData += `<p>Ky eshte nje paragraf</p>`;
        }

        document.getElementById("elements").innerHTML = htmlData;

    }

    generateElements();

    // $("p").on({
    //     mouseenter: function () {
    //         $(this).css("background-color", "lightgray");
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "lightblue");
    //     },
    //     click: function () {
    //         // $(this).css("background-color", "yellow");
    //         $(this).hide();
    //     }
    // });, 



    $(".getcity").change(function () {
        let currentValue = $(this).val();
        alert(currentValue);
    })

    $("#btn-show").click(function () {
        // alert("test");
        $("p").show();
    });


    $("#btn-toggle").click(function () {
        $("p").toggle(5000);
    });


    $(".flip").click(function () {
        // let allFlipClass = document.getElementsByClassName("panel");
        // Array.from(allFlipClass).forEach(item => {
        //     item.style.display = "none";
        // });

        $(".panel").hide();
        let panelAttribute = $(this).attr("panel");
        $(`#${panelAttribute}`).slideToggle("slow");
    });


    //   $("#flip_1").click(function(){
    //     $("#panel_1").slideToggle("slow");
    //   });


});