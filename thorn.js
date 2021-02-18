class Thorn {
    constructor(x, y) {
        var options = {
            'density': 1,
            'friction': 1,
            'restitution': 1,
            "isStatic": true
        }
        this.body = Matter.Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("Images/obstacle1.png");
        this.width = 50;
        this.height = 50;

        Matter.World.add(world, this.body);

    }
    display() {

      /*  var pos = this.body.position;
        push();
        imageMode(CENTER);
       // image(this.image, pos.x, pos.y, this.width, this.height);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
        pop();*/

        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        
        image(this.image, 0, 0, this.width, this.height);
        pop ();

    }
}