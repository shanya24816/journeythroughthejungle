//Variables declaration start
var nameInput = document.getElementById('name-input');
var userNameText = document.getElementById('user-name');

var gameStartElement = document.getElementById('game-start');
var passage1Element = document.getElementById('passage-1');
var foodPassageElement = document.getElementById('foodPassage');
var shelterPassageElement = document.getElementById('shelterPassage');
var waterPassageElement = document.getElementById('waterPassage');
var coconutPassageElement = document.getElementById('coconutPassage');
var climbPassageElement = document.getElementById('climbPassage');
var waitPassageElement = document.getElementById('waitPassage');
var riverPassageElement = document.getElementById('riverPassage');
var treePassageElement = document.getElementById('treePassage');
var groundPassageElement = document.getElementById('groundPassage');
var breakfastPassageElement = document.getElementById('breakfastPassage');
var startjourneyPassageElement = document.getElementById('startjourneyPassage');
var leftPassageElement = document.getElementById('leftPassage');
var rightPassageElement = document.getElementById('rightPassage');
var adventurefurtherPassageElement = document.getElementById('adventurefurtherPassage');
var sleepandhopePassageElement = document.getElementById('sleepandhopePassage');



var playerName = '';

//start Game function, when the user press the button
function startGame() {
  playerName = nameInput.value;

  if (playerName != '') {
    //test if the user has insert a name
    passage1Function();

  } else {
    //otherwise, update error message and toggle modal box
    errorMessage('Please Insert your name');
  }
}

function passage1Function() {
  document.getElementById('user-name').innerHTML = playerName;
  document.getElementById('game-start').hidden = true;
  document.getElementById('passage-1').hidden = false;
}

function foodFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('foodPassage').hidden = false;
}
function shelterFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('shelterPassage').hidden = false;

}
function waterFunction() {
  document.getElementById('passage-1').hidden = true;
document.getElementById('waterPassage').hidden = false;

}
function coconutFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('coconutPassage').hidden = false;
  document.getElementById('riverPassage').hidden = true;
  document.getElementById('waterPassage').hidden = true;

}
function riverFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('riverPassage').hidden = false;
  document.getElementById('waterPassage').hidden = true;
  document.getElementById('coconutPassage').hidden = true;

}
function climbFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('climbPassage').hidden = false;
  document.getElementById('waitPassage').hidden = true;
  document.getElementById('coconutPassage').hidden = true;
}
function waitFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('waitPassage').hidden = false;
  document.getElementById('climbPassage').hidden = true;
  document.getElementById('coconutPassage').hidden = true;

}
function treeFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('treePassage').hidden = false;
  document.getElementById('groundPassage').hidden = true;
  document.getElementById('shelterPassage').hidden = true;

}
function groundFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('groundPassage').hidden = false;
  document.getElementById('treePassage').hidden = true;
  document.getElementById('shelterPassage').hidden = true;
}
function breakfastFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('breakfastPassage').hidden = false;
  document.getElementById('startjourneyPassage').hidden = true;
  document.getElementById('groundPassage').hidden = true;
}
function startjourneyFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('startjourneyPassage').hidden = false;
  document.getElementById('breakfastPassage').hidden = true;
  document.getElementById('groundPassage').hidden = true;
}
function leftFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('leftPassage').hidden = false;
  document.getElementById('startjourneyPassage').hidden = true;
  document.getElementById('rightPassage').hidden = true;
}
function rightFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('rightPassage').hidden = false;
  document.getElementById('startjourneyPassage').hidden = true;
  document.getElementById('leftPassage').hidden = true;
}
function openFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('openPassage').hidden = false;
  document.getElementById('rightPassage').hidden = true;
  document.getElementById('closedPassage').hidden = true;
}
function closedFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('closedPassage').hidden = false;
  document.getElementById('openPassage').hidden = true;
  document.getElementById('rightPassage').hidden = true;
}
function adventurefurtherFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('adventurefurtherPassage').hidden = false;
  document.getElementById('sleepandhopePassage').hidden = true;
  document.getElementById('waitPassage').hidden = true;
}
function sleepandhopeFunction() {
  document.getElementById('passage-1').hidden = true;
  document.getElementById('sleepandhopePassage').hidden = false;
  document.getElementById('adventurefurtherPassage').hidden = true;
  document.getElementById('waitPassage').hidden = true;
}
//function to process options clicks, it checks the id name
function clickFunction(id) {
  if (id == 'foodOption') {

    foodFunction();
  } else if (id == 'shelterOption') {
    shelterFunction();
  }
  else if (id == 'waterOption') {
    waterFunction();
  }
  else if (id == 'coconutOption') {
    coconutFunction();
  }
  else if (id == 'riverOption') {
    riverFunction();
  }
  else if (id == 'climbOption') {
    climbFunction();
  }
  else if (id == 'waitOption') {
    waitFunction();
  }
  else if (id == 'treeOption') {
    treeFunction();
  }
  else if (id == 'groundOption') {
    groundFunction();
  }
  else if (id == 'breakfastOption') {
    breakfastFunction();
  }
  else if (id == 'startjourneyOption') {
    startjourneyFunction();
  }
  else if (id == 'leftOption') {
    leftFunction();
  }
  else if (id == 'rightOption') {
    rightFunction();
  }
  else if (id == 'openOption') {
    openFunction();
  }
  else if (id == 'closedOption') {
    closedFunction();
  }
  else if (id == 'adventurefurtherOption') {
    adventurefurtherFunction();
  }
  else if (id == 'sleepandhopeOption') {
    sleepandhopeFunction();
  }
}


function errorMessage(message) {
  //generic funciton to show modal with error message
  document.getElementById('error-msg').innerHTML = message; //replace innerHTML with message
  $('#error-msg-box').modal('show');
}
