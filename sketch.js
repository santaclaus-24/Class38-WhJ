var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function setup(){
  //creating the stage
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
//if the player count is exactly 4, ...
  if(playerCount === 4){
    //then gameState would updated to state1 ...
    game.update(1);
  }
  // ... and if the gameState = 1, ... 
  if(gameState === 1){
    // ... then the form would be cleared and, ...
    clear();
    // ... the gameState would become playState ..
    game.play();
  }
}
