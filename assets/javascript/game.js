
//function created to add to score, taking into account current score
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt($("#yourScore").text());
  $("#yourScore").text(numberToAdd + currentScore);
}

//making getrandomvalue a function that gets a random value with the below equations
function getRandomValue(a, b) {
  return Math.floor(Math.random() * a + b);
}

function checkPlayerScore() {
  var playerInt = parseInt($("#yourScore").text());
  var targetInt = parseInt($("#targetNumber").text());
  if (playerInt === targetInt) {
    $("#wins").text(parseInt($("#wins").text()) + 1);
    reset();
  } else if (playerInt > targetInt) {
    $("#losses").text(parseInt($("#losses").text()) + 1);
    reset();
  }
}

//function to reset the score and target number
function reset() {
  $("#yourScore").text("0");
  $("#targetNumber").text(getRandomValue(120, 19));
  $("#gem1").data("crystalvalue", getRandomValue(12, 1));
  $("#gem2").data("crystalvalue", getRandomValue(12, 1));
  $("#gem3").data("crystalvalue", getRandomValue(12, 1));
  $("#gem4").data("crystalvalue", getRandomValue(12, 1));
}

$(function() {
  //start the game by setting the target to random number
  $("#targetNumber").text(getRandomValue(120, 19));

  // //assigning id's so the html doc can access this data. assigning random values to each gem
  $("#gem2").data("crystalvalue", getRandomValue(12, 1));

  $("#gem1").data("crystalvalue", getRandomValue(12, 1));

  $("#gem3").data("crystalvalue", getRandomValue(12, 1));

  $("#gem4").data("crystalvalue", getRandomValue(12, 1));

  // "listens" to the event/click and keeps track of the values selected. make the thumbnail active, not static
  $("#gem2").on("click", function() {
    addToScore($(this).data("crystalvalue"));
    checkPlayerScore();
  });

  $("#gem3").on("click", function() {
    addToScore($(this).data("crystalvalue"));
    checkPlayerScore();
  });

  $("#gem1").on("click", function() {
    addToScore($(this).data("crystalvalue"));
    checkPlayerScore();
  });

  $("#gem4").on("click", function() {
    addToScore($(this).data("crystalvalue"));
    checkPlayerScore();
  });
});
