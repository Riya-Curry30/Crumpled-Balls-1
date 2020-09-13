class Ground
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = 1300;
        this.height = 20;

        this.body = Bodies.rectangle(x,y,1300,20, options);
        World.add(world,this.body);

    }
    
    display()
    {
        var pos = this.body.position
       
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}