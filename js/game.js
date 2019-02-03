// alert("hello World");

/*

The great majority of web pages don't have any special
requirements that would indicate moving the js to the top.
Therefore, the case that usually works the best
(js at the bottom) should be employed unless something
comes up to invalidate the use of the default. Premature
optimization is spending time worrying about speed. A
default of putting js at the bottom requires not extra
thought or effort.

Top: When having JavaScript events function on elements
immediately is more important (so if you use a DOM Ready
event to load everything, this is the wrong place)

Bottom: When loading the content is more important

*/

//1. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//2. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//4. You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//5. Create a new variable called level and start at level 0.
var level = 0;

//6. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //7. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title2").text("Level " + level);
    nextSequence();
    started = true;
  }
});

/*
$( "p" ).click(function() {
  $( this ).slideUp();
});
*/

//8. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //9. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //10. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  //console.log(userClickedPattern);

  //11. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});


//12. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //13. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      // console.log("success");

      //14. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //15. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
            nextSequence();
          }, 1000);

        }

      } else {

        // console.log("wrong");

        //16. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

        //17. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        //18. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");

        //19. Call startOver() if the user gets the sequence wrong.
        startOver();

      }

}


//20. Inside game.js create a new function called nextSequence()
function nextSequence() {

  //21. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  //22. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //23. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title2").text("Level " + level);



  //24. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //25. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //26. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //27. Use jQuery to select the button with the same id as the randomChosenColour
  //28. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

/*

  // old code
  //28. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}
*/

  //29. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}



//30. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //31. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //32. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//33. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

  //34. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//35. Create a new function called startOver().
function startOver() {

  //36. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
