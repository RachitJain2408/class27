class Chain {
    constructor(bodyA , bodyB){
        //using the constraint properties
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        //making the chain var
        this.chain = Constraint.create(options);
        //ading thhe chain to the world
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        //displaying the chain
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}