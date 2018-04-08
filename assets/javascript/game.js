var yourScore = document.getElementById('yourScore');
var loser = document.getElementById('losses');
var winner = document.getElementById('wins');
yourScore.innerHTML = 0; //
var targetNumber = document.getElementById('targetNumber');
targetNumber.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var gem2 = document.getElementById("gem2");
//gem2.setAttribtarute("value", "5");
console.log(gem2.value);

var gem1 = document.getElementById("gem1");


var gem3 = document.getElementById("gem3");


var gem4 = document.getElementById("gem4");

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

function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetNumber.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

console.log(getRandomValue(10, 4));

tempString = loser + "";
for (var i = tempString.length; i < 43; i++) {
  tempString += " ";
}
totalLoser.textContent = "Losses " + tempString;

tempString = winner + "";
	for (var i = tempString.length; i < 45; i++) {
		tempString += " ";
	}
  totalWinner.textContent = "Wins " + tempString;
  
  game.updatePageData();