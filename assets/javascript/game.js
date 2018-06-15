//Variable to store the random generated number
var randNumber = Math.floor(Math.random() * 112) + 19;

//printing the random generated number to the screen/html
$("#random-computer-number").text(randNumber);

//Variables to store numbers for pictures/buttons
var gemOne = Math.floor(Math.random() * 10) + 1;
var gemTwo = Math.floor(Math.random() * 10) + 1;
var gemThree = Math.floor(Math.random() * 10) + 1;
var gemFour = Math.floor(Math.random() * 10) + 1;

//assign values to pictures 
$("#image1").attr("data-crystalvalue",gemOne);
$("#image2").attr("data-crystalvalue",gemTwo);
$("#image3").attr("data-crystalvalue",gemThree);
$("#image4").attr("data-crystalvalue",gemFour);

//Variable for total score
var counter = 0;

//printing the random generated number to the screen/html
$("#total-score").text(counter);

//Create a variabe for each image id
var image1 = $("#image1");
var image2 = $("#image2");
var image3 = $("#image3");
var image4 = $("#image4");

//Function to add clicks to total score
image1.on("click", function() {
   // extract the value from the data attribute
    var image1Value = ($(this).attr("data-crystalvalue")); 
    image1Value = parseInt(image1Value);

    //Add the value of the image to the counter
    counter += image1Value;

    // console.log(counter);
})


