class Ground{

    constructor(x, y, width, height){

        //over-riding the default props of physics engine body
        var options = {
            "isStatic": true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        // width and height is not the default prop of physics engine body
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position

        push ();
        noStroke();
        fill (0,0,0,0);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
    }
}