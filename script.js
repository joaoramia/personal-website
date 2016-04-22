/*
Some of the formulas or variables here might not have the same name or might be different from the ones suggested for guessing-gamePt2. This happens because I had already created some of these for Pt1. The main struggle here was to change manipulating the DOM from Javascript to jquery. Hope you like it!
*/

$(document).ready(function(){

/* *** Main Guessing Game Variables **** */
  $("#winOrLose").hide(); //this is the hidden winning or losing images that will show up upon winning or losing
  var playersGuess;
  var winningNumber;
  var guesses = [];


/* **** Function Calls For The Game **** */

  generateWinningNumber();
  
  $("#submitButton").on("click", check);
  
  $("#userGuess").focus();
 
  $("#userGuess").keyup(function(event){
    if(event.keyCode == 13){
      $("#submitButton").click();
    }
  });
  
  $("#giveHint").on("click", hint);
  
  $("#playAgain").on("click", reload);


/* **** Guessing Game Functions **** */

  function generateWinningNumber(){
    winningNumber = Math.floor((Math.random() * 100) + 1); //100 random plus one because Math.random goes from 0 (inclusive) up to but not including 1 (exclusive).
  }
  
  function numberAlreadyPicked(num){
    for (var j = 0; j < guesses.length; j++){
      if (guesses[j] == num){
        return true;
      }
    }
    return false;
  }

  function countDown(){
    var count = 5;
    return count - guesses.length;
  }

  function check(){
    playersGuess = parseInt($("#userGuess").val());
    
    if (isNaN(playersGuess)){
      $("#result").html("Input numbers only");
    }
    else if(playersGuess < 0 || playersGuess > 100){
      $("#result").html("Input numbers between 0 and 100 only");
    }
    else if(playersGuess == winningNumber){
      $("#userGuess").hide();
      $("#submitButton").hide();
      $("#giveHint").hide();
      $("#countDown").hide();
      $("#result").hide();
      $("#firstLine").html("You win!");
      $("#container").css({"background-image": "url(" + "win.gif" + ")"});
    }
    else {
      hotOrCold();
    }
  
    $("#userGuess").val(null); //it equals null here so the placeholder value (0...100) will return
  }


  function hint(){
    if (isNaN(playersGuess)){
      $("#result").html("Try a number next time");
    }
    else if(playersGuess > winningNumber){
      $("#result").html("Try a smaller number");
    }
    else if (playersGuess < winningNumber){
      $("#result").html("Try a bigger number");
    }
    else {
      $("#result").html("You already got it right");
    }
  }


  function hotOrCold(){
    var difference;
   
    if(numberAlreadyPicked(playersGuess)){
      $("#result").html("Number already picked, try a different one");
      return true;
    }
    else {
      guesses.push(playersGuess);
      if (countDown() > 1){
        $("#count").html(countDown());
        $("#guessed").html("Numbers guessed so far are: "+guesses);
      }
      else {
        $("#count").html(countDown());
        $("#tries").html(" try");
        $("#guessed").html("Numbers guessed so far are: "+guesses);
      }
    }

    if (playersGuess > winningNumber){
      difference = playersGuess - winningNumber;
    }
    else if(playersGuess < winningNumber){
      difference = winningNumber - playersGuess;
    }

//Below are the different levels of hot and cold
    if(countDown() == 0){
      $("#userGuess").hide();
      $("#submitButton").hide();
      $("#giveHint").hide();
      $("#countDown").hide();
      $("#result").hide();
      $("#firstLine").html("You lose!");
      $("#container").css({"background-image": "url(" + "lose.gif" + ")"});
    }
    else if (difference < 10){
      $("#result").html("Really hot!!");
    }
    else if(difference < 20){
      $("#result").html("Pretty hot!");
    }
    else if(difference < 30){
      $("#result").html("Hot!");
    }
    else if(difference < 40){
      $("#result").html("Kind of hot");
    }
    else if(difference < 50){
      $("#result").html("A bit hot");
    }
    else if(difference < 60){
      $("#result").html("A bit cold");
    }
    else if(difference < 70){
      $("#result").html("Kind of cold");
    }
    else if(difference < 80){
      $("#result").html("Pretty cold");
    }
    else if(difference < 90){
      $("#result").html("Really cold");
    }
    else if(difference < 100){
      $("#result").html("Just give up");
    }
  }

  function reload(){
    document.location.reload();
  }

});
