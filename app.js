$(document).on("ready", function(){
  console.log("JS working!");
  //create new player
  player1 = new Player('Hila', 'A');
  player2= new Player('Emily', 'L');
  var finish=false;
  board = new Board();
  //listen to keyUP event and animate move
  $(document).on("keydown", function(event){
    if(event.which===65 && finish===false){
      player1.move($("#player1"));
      if(player1.checkWin("#player1")) {
        finish = true;
          alert("Game Over - The winner is player 1");
      }
    }
    else if(event.which===76 && finish===false){
      player2.move($("#player2"));
      if(player2.checkWin("#player2")){
        finish = true;
        alert("Game Over - The winner is player 2");
      }
    }
  });
  $('button').on("click", function(){
    board.reset();
  });

});

function Board(){
  this.reset = function(){
    player1.pWidth = 30;
    player2.pWidth = 30;
    $('$player1').css("margin-left", "30px");
    $('$player2').css("margin-left", "30px");
    finish=false;
  };
}

function Player(){
  this.name = "Hila";
  this.moveKey = "A";
  this.pWidth = 30;

  //animate move on every keyUp event
  this.move = function($player){
    $player.animate({ "margin-left": "+=30px" }, "fast");
    this.pWidth +=30;
    //console.log(this.pWidth);
  };

  this.checkWin = function($player){
    //alert("player width: " + this.pWidth + " window width: " + window.innerWidth);
    if(this.pWidth>=window.innerWidth-60){
        return true;
    }
    else {
      return false;
    }
  };
}
