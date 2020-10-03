class Paper {
    constructor(x,y,radius){
        var options = 
        { isStatic: false, 
        restitution: 0, 
        friction: 6.5, 
        density: 1.5}
        
        this.body = Bodies.circle(x,y,radius/2,options)
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        

    }
    display(){
        var pos =this.body.position;
      //ellipseMode(RADIUS);
      fill("tan");
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
     // ellipse(pos.x, pos.y, this.radius,this.radius);
    }
}