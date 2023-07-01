var buttoncolour=["red", "blue", "green", "yellow"];

var game=[];
var user=[];

var count=0;
var start=false;

$(document).keypress(function(){
    if(!start){
    $("h1").text("Level "+count);
    nextbutton();
    start=true;
    }
});

$(".btn").click(function(){
    user.push(this.id);
    playaudio(this.id);
    animatePress(this.id);
    checkans();
});

function checkans(){
    if(user[user.length-1]==game[user.length-1]){

       if (user.length === game.length){
        setTimeout(function () {
          nextbutton();
        }, 1000);
      }
    }

     else {
        playaudio("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        gameover();
    }
 }

 function gameover(){
    count=0;
    game=[];
    start=false;
 }

function nextbutton(){
    user=[];
    count++;
    $("#level-title").text("Level " + count);

    var random=Math.floor(Math.random()*4);
    var randomselect=buttoncolour[random];
    game.push(randomselect);

    $("#"+randomselect).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playaudio(randomselect);
}

function playaudio(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
