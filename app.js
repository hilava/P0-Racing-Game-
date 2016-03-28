var snd = new Audio("eyeOfTheTiger.mp3"); // buffers automatically when created
var finish = false;
$(document).on("ready", function(){
  console.log("JS working!");
  //create two new players
  player1 = new Player('A');
  player2= new Player('L');
  board = new Board();
  //listen to keydown event
  $(document).on("keydown", function(event){
    var p;
    var $player;
    var winner;
    //check if the game is still on
    if(finish===false){
      //check for key 'A'-->player1's key
      if(event.which===65){
        p=player1;
        $player=$('#player1');
        winner = "Player 1";
      }
      //check for the key 'L'-->player2's key
      else if(event.which===76){
        p=player2;
        $player=$('#player2');
        winner = "Player 2";
      }
      //start playing 'Eye Of The Tiger'
      snd.play();
      //call the move function
      p.move($player);
      //call the checkWin function
      if(p.checkWin()) {
        finish = true;
        alert("Game Over - The winner is: " + winner);
      }
    }
  });
  //listen to reset button click event
  $('button').on("click", function(){
    board.reset();
  });

});

function Board(){
  //reset function - reset margins to 30-->brings the player to the start line
  this.reset = function(){
    player1.pWidth = 30;
    player2.pWidth = 30;
    $('#player1').css("margin-left", "30px");
    $('#player2').css("margin-left", "30px");
    finish=false;
    //pause 'Eye Of The Tiger' and relaod it for next race
    snd.pause();
    snd.reload();
  };
}

function Player(moveKey){
  this.moveKey = moveKey;
  this.pWidth = 30;

  //animate move on every keydown event--> increase margin-left by 30px every move
  this.move = function($player){
    $player.animate({ "margin-left": "+=30px" }, "fast");
    //record the total left margin
    this.pWidth +=30;
  };

  this.checkWin = function(){
    //check if the total left margin is greater the window inner width
    if(this.pWidth>=$('#lane1').width()){
        return true;
    }
    else {
      return false;
    }
  };
}
