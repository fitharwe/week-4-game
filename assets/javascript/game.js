var yourScore = document.getElementById('yourScore');
var loser = document.getElementById('losses');
var winner = document.getElementById('wins');
var targetNumber = document.getElementById('targetNumber');
targetNumber.innerHTML = getRandomValue(20, 5);

//function created to add to score, taking into account current score
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

//assigning id's so the html doc can access this data. assigning random values to each gem
var gem2 = document.getElementById("gem2");
gem2.value = getRandomValue(10, 4);

var gem1 = document.getElementById("gem1");
gem1.value = getRandomValue(10, 4);

var gem3 = document.getElementById("gem3");
gem3.value = getRandomValue(10, 4);

var gem4 = document.getElementById("gem4");
gem4.value = getRandomValue(10, 4);

// "listens" to the event/click and keeps track of the values selected. make the thumbnail active, not static
gem2.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

gem1.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

gem3.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

gem4.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

//making getrandomvalue a function that gets a random value with the below equations
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetNumber.innerHTML);
  if (playerInt === targetInt) {
    winner.innerHTML = parseInt(winner.innerHTML) + 1;
    reset();
  } else if (playerInt > targetInt) {
    loser.innerHTML = parseInt(loser.innerHTML) + 1;
    reset();
  } 
}

//function to reset the score and target number
function reset() {
  yourScore.innerHTML = 0;
  targetNumber.innerHTML = getRandomValue (20, 5);
}

