var ball;
var database,position
var gameState=0;
var form,player,game
function setup(){
    createCanvas(500,500);
   


database =firebase.database()
game=new Game()
game.start();

};

function draw(){
    background("white");
}
