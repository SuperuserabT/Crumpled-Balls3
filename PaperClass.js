class PaperClass{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.8,
            density:1.2
        }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);

      this.image=loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}