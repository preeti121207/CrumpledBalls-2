class Bin {
    constructor(x,y,width,height){
    var options = 
    { isStatic: true,
     friction: 6.5 } 
   

      this.body = Bodies.rectangle(x,y,width,height/4,options);
      this.width = width;
      this.height = height;
       
      this.image = loadImage("dustbingreen.png");
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x,pos.y-30, 150,130);
        //rectMode(CENTER);
        //fill("red");
        //rect(pos.x,pos.y,this.width,this.height);
      
    }
  }
  