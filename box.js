class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.2,
            'friction':0.2,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y,30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}