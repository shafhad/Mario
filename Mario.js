class Mario {
    constructor(x, y) {
        var options = {
            'density': 1,
            'friction': 1,
            'restitution': 1

        }
        this.body = Matter.Bodies.rectangle(x, y, 80, 100, options);
        this.image = loadImage("Images/mario00.png");
        this.width = 80;
        this.height = 100;
      
        // Matter.Body.scale(this.mario, 500, 500)
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