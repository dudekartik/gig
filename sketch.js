const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,800);
  
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,800,1200,20);
  base1 = new Ground(550,700,210,12);
  base2 = new Ground(900,600,154,12);
  ball=new Circle(300,350,20);

  block1= new Block(490,500)
  block2= new Block(520,500)
  block3= new Block(550,500)
  block4= new Block(580,500)
  block5= new Block(610,500)
  block6= new Block(460,500)
  block7= new Block(640,500)

  block8= new Block(490,450)
  block9= new Block(520,450)
  block10= new Block(550,450)
  block11= new Block(580,450)
  block12= new Block(610,450)


  block13= new Block(520,400)
  block14= new Block(550,400)
  block15= new Block(580,400)

  block16= new Block(550,350)

  block17= new Block(840,400)
  block18= new Block(870,400)
  block19= new Block(900,400)
  block20= new Block(930,400)
  block21= new Block(960,400)


  block22= new Block(870,300)
  block23= new Block(900,300)
  block24= new Block(930,300)

  block25= new Block(900,200)

  dod=new HIH(ball.body,{x:250,y:550});
  Engine.run(engine)
}

function draw() {
  background("black");  
  drawSprites();
  ground.display();
  base1.display()
  base2.display()
  ball.display()
  dod.display();
  fill("skyblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise")
  block13.display();
  block14.display();
  block15.display();
  fill("grey")
  block16.display();
  fill("pink")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise")
  block22.display();
  block23.display();
  block24.display();
  fill("grey")
  block25.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 dod.fly();
}
