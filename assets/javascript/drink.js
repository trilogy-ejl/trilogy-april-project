
// drink api

$(document).ready(function () {
    $("#btn").click(function () {
        $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", function (data) {
            console.log(data.drinks[0]);
            // $('#output').text(JSON.stringify(data.drinks[0].strDrink));
            $('#output').text(data.drinks[0].strDrink);
            $('#instuc').text(data.drinks[0].strInstructions);
        })
    })
})