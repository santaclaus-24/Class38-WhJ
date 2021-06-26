class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      //on = reads continuosly, while once = only reads "once"
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    //the form would be hidden when its PLAY STATE
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        //whichever player is playing on his screen, ONLY his/her name would be in red
        if (plr === "player" + player.index)
          fill("red")
        else
        // ... else it would be black
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
    
    //when we press the up arrow and the position isnt nothing, the distance will increment by 50
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      //updating the player
      player.update();
    }
  }
}
