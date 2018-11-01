//Variable to store the random generated number
var randNumber = Math.floor(Math.random() * 112) + 19;
var randNumber = parseInt(randNumber);

//printing the random generated number to the screen/html
$("#random-computer-number").text(randNumber);

//printing the win counter to the screen
var winCounter = 0;
$("#win-counter").text(winCounter);

//printing loss counter to the screen
var lossCounter = 0;
$("#loss-counter").text(lossCounter);

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
$("#image1").on("click", function() {
   // extract the value from the data attribute
    var image1Value = ($(this).attr("data-crystalvalue")); 
    image1Value = parseInt(image1Value);

    //Add the value of the image to the counter
    counter += image1Value;

    $("#total-score").text(counter);

    console.log(counter);
});

// # Image 2 Function to add clicks to total score
$("#image2").on("click", function() {
    // extract the value from the data attribute
     var image1Value = ($(this).attr("data-crystalvalue")); 
     image1Value = parseInt(image1Value);
 
     //Add the value of the image to the counter
     counter += image1Value;

     $("#total-score").text(counter);
 
     console.log(counter);
 });

//  Image 3 Function to add clicks to total score
 $("#image3").on("click", function() {
    // extract the value from the data attribute
     var image1Value = ($(this).attr("data-crystalvalue")); 
     image1Value = parseInt(image1Value);
 
     //Add the value of the image to the counter
     counter += image1Value;

     $("#total-score").text(counter);
 
     console.log(counter);
    });

//  Image 4 Function to add clicks to total score
$("#image4").on("click", function() {
    // extract the value from the data attribute
     var image1Value = ($(this).attr("data-crystalvalue")); 
     image1Value = parseInt(image1Value);
 
     //Add the value of the image to the counter
     counter += image1Value;

     $("#total-score").text(counter);
 
     console.log(counter);
    }); 

    if (counter === randNumber ) {
        winCounter ++;
        $("#loss-counter").text(winCounter);
        $("#win-loss-notify").text("You Won!!");
    }

    else if (counter > randNumber) {
        lossCounter ++;
        $("#win-counter").text(lossCounter);
        $("#win-loss-notify").text("You Loose!!");   
    };