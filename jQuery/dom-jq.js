$(document).ready(function () {

    //get data

    let getText = $("#text").text();
    console.log(getText);

    let getHtml = $("#text").html();
    console.log(getHtml);

    let getValue = $("#personalnr").val();
    console.log(getValue);


    //set data
    $("#text").text("text i vendosur permes jquery");
    $("#text").html("<h3>text i vendosur permes jquery</h3>");
    $("#personalnr").val("vler e vendosur");


    $("#paragraphs").append("<p>Append Paragraf</p>");
    $("#paragraphs").append("<p>Append Paragraf</p>");
    $("#paragraphs").append("<p>Append Paragraf</p>");


    $("#paragraphs").prepend("<p>Prepend Paragraf</p>");
    $("#paragraphs").prepend("<p>Prepend Paragraf</p>");


    $("#paragraphs").before("<p>Before Paragraf</p>");
    $("#paragraphs").before("<h1>Before Paragraf</h1>");


    $("#paragraphs").after("<p>After Paragraf</p>");
    $("#paragraphs").after("<h1>After Paragraf</h1>");

    

});