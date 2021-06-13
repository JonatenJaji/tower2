class Block{
    constructor(x, y, width, height) {
        var options = {
        
         restitution : 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png")
        World.add(world, this.body);
        this.vis=255
      }
      display(){
        
        var angle = this.body.angle;
        var pos= this.body.position;
        console.log(this.body.speed);
        if(this.body.speed<3)
        {
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);

        }
        else
        {
          World.remove(world,this.body)
        push();
        this.vis=this.vis-15;
        tint(255,this.vis)  
        image(this.image,pos.x,pos.y,this.width, this.height);

        pop(); 
        }
          
        
      }
}
