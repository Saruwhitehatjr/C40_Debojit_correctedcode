class Game{

    constructor()
    {

    }


    getState()
    {
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })    
    }

    update(state)
    {
      database.ref('/').update({
          gameState:state
      })
    }
  async  start()
{if(gameState===0)
    {    player=new Player();
       // player.getCount();
       var playerCountRef=await database.ref('playerCount').once("value")
    
       if(playerCountRef.exists()){
           playerCount=playerCountRef.val()
           player.getCount();
       }
        form=new Form();
        form.display()
    }

}
play()
{
    form.formHide();
    textSize(30);
    text("GAME START",120,100);
}

}