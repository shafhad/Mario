class Coin{
    constructor(x, y) {
        var options = {
            'density': 1,
            'friction': 1,
            'restitution': 1,
            "isStatic": true

        }
        this.body = Matter.Bodies.rectangle(x, y, 80, 100, options);
        this.image = loadImage("Images/coin.png");
        this.width = 40;
        this.height = 40;
      
        
        Matter.World.add(world, this.body);
       

    }
    display() {
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        
        image(this.image, 0, 0, this.width, this.height);
        pop ();
    }
}