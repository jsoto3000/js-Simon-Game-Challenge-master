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

//3. Inside game.js create a new function called nextSequence()
function nextSequence() {

  //4. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //5. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //7. Use jQuery to select the button with the same id as the randomChosenColour
  //8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}
