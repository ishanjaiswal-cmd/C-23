class Box{

constructor(){

var options={
restitution : 0.8
}
this.body=bodies.rectangle(200,200,50,50,options);
this.width=50;
this.height=50;
World.add(world,this.body);
}
display(){
 var pos=this.body.position;
rectMode(CENTRE);
rect(pos.x,pos.y,pos.width,pos.height);
}
}
