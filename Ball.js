class Ball{
    constructor(x,y,width,height,angle){
    var options = {
        destiny: 1,
        frictionAir : 0.005};


    this.body = bodies.rectangle(x,y,width,height,angle);
    this.width = width;
    this.height = height;    
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angles;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
    
    }
}