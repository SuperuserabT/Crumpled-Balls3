class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.paper = Constraint.create(options);
        World.add(world, this.paper);
    }

    display(){
        if(this.paper.bodyA!==null){
            var pointA = this.paper.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            strokeWeight(3)
            line(pointA.x+15, pointA.y+15, pointB.x , pointB.y);
        }
    }

    fly(){
        this.paper.bodyA=null
    }

}