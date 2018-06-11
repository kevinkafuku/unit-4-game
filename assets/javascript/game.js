
var randomResult;
var userWin = 0;
var userLoss = 0;
var previousDBall = 0;

var resetAndStartGame = function () {

    $(".dragonBalls").empty();

    var images = [
        "https://ae01.alicdn.com/kf/HTB1r_aGJVXXXXXGXFXXq6xXFXXXR/Dragon-Ball-Z-bola-de-cristal-estrella-Big-tama-o-DIN-3-0-pulgadas-7-5.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/HTB1r_aGJVXXXXXGXFXXq6xXFXXXR/Dragon-Ball-Z-bola-de-cristal-estrella-Big-tama-o-DIN-3-0-pulgadas-7-5.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/HTB1r_aGJVXXXXXGXFXXq6xXFXXXR/Dragon-Ball-Z-bola-de-cristal-estrella-Big-tama-o-DIN-3-0-pulgadas-7-5.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/HTB1r_aGJVXXXXXGXFXXq6xXFXXXR/Dragon-Ball-Z-bola-de-cristal-estrella-Big-tama-o-DIN-3-0-pulgadas-7-5.jpg_640x640.jpg",
    ];



randomResult = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#result").text(randomResult)

    for(var i = 0; i < 4; i++){

        var randomNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        //console.log(randomNumber);


        var dragonBall = $("<div>");
            dragonBall.attr({
                "class":"dragonBall col-md-3",
                "random-data": randomNumber
            });
            dragonBall.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"
            });

        $(".dragonBalls").append(dragonBall);

    }
    
    $("#previousDBall").text(previousDBall);

    $("#userLoss").text(userLoss);

    $("#userWin").text(userWin);
}

resetAndStartGame();


$(document).on("click", ".dragonBall", function() {


    var num = parseInt($(this).attr("random-data"));

    previousDBall += num;

    $("#previousDBall").text(previousDBall);

    console.log(previousDBall);

    if(previousDBall > randomResult){

        userLoss++;

        $("#userLoss").text(userLoss);

        previousDBall = 0;

        resetAndStartGame();

    }
    else if(previousDBall === randomResult){

        userWin++;

        $("#userWin").text(userWin);

        previousDBall = 0;

        resetAndStartGame();

    }

});
// Psuedo Coding 
// We are going to creat a game with 4 Dragon Balls and a random result

// Every Dragon-Ball should have a random number value between 1 - 12

// A new random number value should be generated for each Dragon-Ball we Win or Lose the game

// When clicking any Dragon-Ball, the game should be adding to the previous Dragon-Ball random number value
// until it equals the Random Result

// If the random number value total is greater than the random result, we incriment a loss
// If the random number value total is greater than the random result, we incriment a win