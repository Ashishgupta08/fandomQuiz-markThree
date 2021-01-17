var readlineSync= require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold('WELCOME TO THE QUIZ \n'));
console.log(chalk.cyanBright('ONLY A TRUE MARVEL CINEMATIC UNIVERSE FAN CAN GET 100% ON THIS QUIZ\n'));

var userName = readlineSync.question(chalk.cyanBright("Please enter your name - "));

console.log(chalk.red.bold("\nHey!!! "+ userName +"\nGet ready for the QUIZ.\n\nRules :- \nEnter a/b/c for each question to answer.\nFor each correct answer you will get 2 points.\nFor each wrong answer 1 point will be deducted."));

console.log(chalk.cyanBright.bold("\nBest of Luck!!!!\n"));

console.log('-----------------------\n');

var que1 = {
  q : "WHAT IS THE NAME OF THE MARVEL COMIC LEGEND WHO HAS MADE AN APPEARANCE IN ALL THE FILMS OF THE MARVEL CINEMATIC UNIVERSE ? \na. STAN LEE\nb. STEVE ROGERS\nc. ROBERT DOWNEY JR.",
  a : "a"
};

var que2 = {
  q : "THOR’S HAMMER MJÖLNIR IS MADE OF METAL FROM THE HEART OF A DYING WHAT? \na. ASTEROID \nb. COMET \nc. STAR",
  a : "c"
};

var que3 = {
  q : "WHAT IS THE NAME OF THE VILLAIN IN ANT-MAN? \na. SCORPION\nb. YELLOWJACKET\nc. THANOS",
  a : "b"
};

var que4 = {
  q : "WHAT IS THE NAME OF THE SET OF DOCUMENTS THAT REGULATE THE ACTIVITIES OF ENHANCED PERSONS? \na. SOKOVIA ACCORDS\nb. WAKANDA ACCORDS\nc. STARK ACCORDS",
  a : "a"
};

var que5 = {
  q : "WHICH OF THE FOLLOWING IS NOT ON CAPTAIN AMERICA’S TO-DO LIST IN CAPTAIN AMERICA: THE WINTER SOLDIER? \na. DISCO\nb. THAI FOOD\nc. MIRACLE ON ICE",
  a : "c"
};

var que6 = {
  q : "HOW DOES YONDU CONTROL THE YAKA ARROW? \na. By Whistling\nb. By Winking\nc. By flicking his wrist",
  a : "a"
};

var que7 = {
  q : "WHAT “ONE THING ON EARTH” IS PEPPER POTTS ALLERGIC TO? \na. Strawberries\nb. Blueberries\nc. Grapes",
  a : "a"
};

var que8 = {
  q : "IN THE POST-CREDITS SCENE OF MARVEL'S THE AVENGERS, WHAT TYPE OF RESTAURANT ARE THE AVENGERS SHOWN EATING AT? \na. SHAWARMA\nb. PIZZA\nc. SUSHI",
  a : "a"
};

var que9 = {
  q : "WHOSE HOME SERVES AS THE “SAFE HOUSE” THE AVENGERS HEAD TO IN MARVEL'S AVENGERS: AGE OF ULTRON? \na. Black Widow's Home\nb. HawkEye's Home\nc. Peggy Carter's Home",
  a : "b"
};

var que10 = {
  q : "WHAT IS THE WI-FI PASSWORD KARL MORDO HANDS TO DOCTOR STRANGE? \na. DrStrange\nb. KamarTaj\nc. Shamballa",
  a : "c"
};

var questions = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];

var topScores = [
  {name : 'Shreyas', score : 20},
  {name : 'Ashutosh', score : 19},
  {name : 'Nidhi', score : 18},
  {name : 'Anupriya', score : 18},
  {name : 'Sundaram', score : 17}
];

var score = 0;

for(var i=0; i<questions.length; i++){

  if(i===3){
    if(score >=4){
      console .log('You qualified for the next lvl - LEVEL 2 🤩\n');
    }else{
      console.log('Oh no!, you failed to qualify for nxt lvl 😟\n');
      break;
    }
  }

  if(i===7){
    if(score >=10){
      console .log('You qualified for the next lvl - LEVEL 3 🤩\n');
    }else{
      console.log('Oh no!, you failed to qualify for nxt lvl 😟\n');
      break;
    }
  }
  calculateScore(i+1, questions[i].q, questions[i].a);
}

console.log('-----------------------');

console.log(chalk.green("\n*****Leaderboard*****\n"));
getTopScores(topScores);

console.log('\n-----------------------');

console.log(chalk.red('\n💥 FINAL SCORE - ' + score + ' 💥'));

for(var i=0; i<topScores.length; i++){
  if(score >= topScores[i].score){
    console.log(chalk.green('\n\nIf you have beaten the top 5 highscore then take screenshot and share with me!!!'));
    break;
  }
}

function calculateScore(questionNumber, question, answer){
  var userAns = readlineSync.question(chalk.cyanBright(questionNumber + ') ' + question + "\nYour answer - "));
  if(userAns == answer){
    console.log(chalk.green("Great!! Right Answer🎉"));
      score+=2;
  }else {
    console.log(chalk.green("Oh! no.... It's wrong"));
      score-=1;
  }
  
  console.log('✨  Current Score - ' + score + '\n');
}

function getTopScores(leaderboard){
  for(var i=0; i<leaderboard.length; i++){
    console.log(chalk.bold(leaderboard[i].name +" : " + leaderboard[i].score));
  }
}