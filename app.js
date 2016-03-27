$(document).on("ready", function(){
  console.log("JS working!");
  //create two new players
  player1 = new Player('A');
  player2= new Player('L');
  var finish=false;
  board = new Board();
  //listen to keydown event
  $(document).on("keydown", function(event){
    var p;
    //check if the game is still on
    if(finish===false){
      //check for key 'A'-->player1's key
      if(event.which===65){
        p=player1;
      }
      //check for the key 'L'-->player2's key
      else if(event.which===76){
        p=player2;
      }
      //call the move function
      p.move($("#" + p));
      //call the checkWin function
      if(p.checkWin()) {
        finish = true;
        alert("Game Over - The winner is: " + p.name);
      }
    }
    // if(event.which===65 && finish===false){
    //   player1.move($("#player1"));
    //   if(player1.checkWin("#player1")) {
    //     finish = true;
    //       alert("Game Over - The winner is: " + player1.name);
    //   }
    // }
    // else if(event.which===76 && finish===false){
    //   player2.move($("#player2"));
    //   if(player2.checkWin("#player2")){
    //     finish = true;
    //     alert("Game Over - The winner is: " + player2.naem);
    //   }
  //  }
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
    $('$player1').css("margin-left", "30px");
    $('$player2').css("margin-left", "30px");
    finish=false;
  };
}

function Player(moveKey){
  //this.name = pName;
  this.moveKey = moveKey;
  this.pWidth = 30;

  //animate move on every keydown event--> increase margin-left by 30px every move
  this.move = function(){
    this.animate({ "margin-left": "+=30px" }, "fast");
    //record the total left margin
    this.pWidth +=30;
    //console.log(this.pWidth);
  };

  this.checkWin = function(){
    //alert("player width: " + this.pWidth + " window width: " + window.innerWidth);
    //check if the total left margin is greater the window inner width
    if(this.pWidth>=window.innerWidth-60){
        return true;
    }
    else {
      return false;
    }
  };
}
