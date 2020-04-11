class Game
{
  constructor()
  {

  }  

  //read the gameState from database
 getState()
 {
     //creating a variable with the gameState from the database
   var gameStateRef = database.ref('gameState'); 
   //making the database read the given value
   gameStateRef.on("value",function(data){
       gameState = data.val();
   }); 
 }

 //update the gameState in database
 update(state)
 {
     //updating the database and referring
   database.ref('/').update({
       gameState : state
   });  
 }

 //function to start the game
 start()
 {
     //giving condition to generate the form and increasing the playerCount
   if(gameState === 0)
   {
     player = new Player();
     player.getCount();
     form = new Form();
     form.display();  
   }  
 }

 play()
 {
   //hiding the form and starting the game
   form.hide();
   textSize(30);
   text("GAME START",120,100);
   //getting the players info
   Player.getPlayerInfo();
   //showing the info when all players are entered in the game
   if(allPlayers !== undefined)
   {
     var display_position = 130;
     for(var plr in allPlayers)
     {
       if(plr === "player"+player.index)
       {
         fill("red");
       }

       else
       {
         fill("black");
       }
       display_position+=20;
       textSize(15);
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
     }
   } 
   //increasing the distance
   if(keyIsDown(UP_ARROW)&& player.index !== null)
   {
     player.distance+=50;
     player.update();
   }
 }
}