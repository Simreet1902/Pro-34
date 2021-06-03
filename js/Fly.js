class Fly{
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            point1:{x:this.offsetX, y:this.offsetY}
        }

        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    display(){
      var pointA = this.fly.bodyA.position;
      var pointB = this.fly.bodyB.position;

      strokeWeight(2);

      var Anchor1X = pointA.x
      var Anchor1Y = pointA.y

      var Anchor2X = pointB.x+this.offsetX
      var Anchor2Y = pointB.y+this.offsetY

      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}