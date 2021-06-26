class Form {

  constructor() {

    //creating input box, where we can enter something and itll be stored
    this.input = createInput("Name");
    //creating the "PLAY" button which we can press it
    this.button = createButton('Play');
    //the greeting would "Hello'Name'"
    this.greeting = createElement('h2');
  }
  hide(){
    //these commands would hide the things
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    //setting the positions of the input box and the play button
    this.input.position(130, 160);
    this.button.position(250, 200);
    
    //NEW CONCEPT ; arrow function - would be connectd the object of the class, not to the button
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;

      player.update();
      //updating the playerCount
      player.updateCount(playerCount);
      
      //the greeting would be "Hello'Name'"
      this.greeting.html("Hello " + player.name)
      //setting the position of where the 'greeting' should be displayed
      this.greeting.position(130, 100);
    });
  }
}
