$(document).ready(function(){


    //validation
    var myValidation = {

        height: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        },
        weight: {

            required: true,
            min: 88,
            max: 353,
            digits: true
        }

    }

    var myMessages = {

        height: {
            required: "Fill this in",
            min: "must be higher or equal than 59",
            max: "must be lower or equal than 79",
            digits: "You are bad at this form"
        },
        weight: {

            required: "Fill this in",
            min: "must be higher or equal than 88",
            max: "must be lower or equal than 353",
            digits: "You are bad at this form"
        }

    }

    //events
    $("form").validate({
        submitHandler: calculateBmi,
        rules: myValidation,
        messages: myMessages
    });

    //functions
    
    function calculateBmi()
    {
        var heightInput = $("#height").val();
        var weightInput = $("#weight").val();

        var bmiFormula = (weightInput / (heightInput ** 2)) * 703;

        $("#bmiOutput").text(bmiFormula.toFixed(1));
    }


});