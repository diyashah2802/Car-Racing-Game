class Form{
     constructor(){

     }
     display(){
         var title = createElement('h2')
         title.html("Car racing game")
         title.position(130,0);
         var input = createInput("Name")
         input.position(130,160);
         var button = createButton("Enter")
         button.position(250,200);

         button.mousePressed(function(){
             input.hide()
             button.hide()
             var name = input.value;

             //to update the player name in the database 
            player.update(name)
            playeCount+=1
            player.updateCount(playerCount)

            //greeeting the player
            var greeting = createElement('h3')
            greeting.html("hello " + name )
            greeting.position(130,160);

         })
     }
}