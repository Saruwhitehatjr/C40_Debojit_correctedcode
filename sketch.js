var ball;
var database,position
var gameState=0;
var form,player,game,playerCount
function setup(){
    createCanvas(500,500);
   database=firebase.database();
   game=new Game();
   game.getState();


database =firebase.database()
game=new Game()
game.start();
game.start
};

function draw(){
    if(playerCount===4){
            game.update(1);
        }
if(gameState===1)
{
    game.play();
}


        
}
