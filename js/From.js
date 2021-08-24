class  Form
{
    constructor()
    {

    }
    display()
    {
        var title =createElement('h2')
        title.html("Car Racing Game")
        title.position(130,30)

        var input=createInput("Name");
        input.position(130,160)

        var button =createButton("Play")
        button.position(250,200);

        var greeting =createElement('h2')

        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name =input.value();
            greeting.html("hello"+name)
            greeting.position(130,160)
        })
    }
}