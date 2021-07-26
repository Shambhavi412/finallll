





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var eB1, eT1, b;
var b1, t1, b2, t2, b3, t3, b4, t4, b5, t5, t6, b6;

var t7,t8,t9,t10,t11;

var t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30;

var b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30;

var t31, t32, t33, t34, t35, t36, t37, t38, t39, t40;

var b31, b32, b33, b34, b35, b36, b37, b38, b39, b40;

var b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60

var t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60;
var ground;

var player;
var plr;

var cam;

var Xp;

var bg;
var t;

var shps;

var angle = 0;

var ob1;

var d;

var gravity;

var r;

var d, d1, d2;

var hit = false;
var hit2 = false;
var hit3 = false;
var hit4 = false;
var hit5 = false;
var hit6 = false;
var hit7  = false;
var hit8 = false;
var hit9 = false;
var hit10 = false;

var hi;
var l;

var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30;
var u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31, u32, u33, u34, u35, u36, u37, u38, u39, u40, u41, u42, u43, u44, u45, u46, u47, u48, u49, u50, u51, u52, u53, u54, u55;

var jp;

var kopGroup;
var Kx, Ky;
var gs = 1;
//var kop;
var rules;
var rL;
var rL2

function preload() {
  eT1 = loadImage('images/peace.png');
  eB1 = loadImage('images/lo.png')
  //b = loadImage('images/3.jpg');
  //bg = loadImage('images/bbb.png');
  l = loadImage("images/love.jpg");
  rL = loadImage("rules/1.jpg")
  rL2 = loadImage("rules/2.jpg")

  //o = loadImage("images/kljk.pdf")
    }



function setup(){
    var canvas = createCanvas(displayWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    /*engine = Engine.create(document.body, {
      world: {
        gravity: { x:0, y:0.17 }
      }
    }*/
    // = createSprite(windowWidth/2, windowHeight, 1000,500);
  //rules.addImage("rules", rL)
    
    //b3 = new JBody(150,b2.body.position.y-69,60,60,'lightblue')
    ground = new JBody(displayWidth/2,625,displayWidth*40,20,eT1);
   
    //ellipseMode(RADIUS);
    player = createSprite(150,300,40,40);
   player.shapeColor = "pink";
    //player = new Player();
    
    cam = createSprite(100,0,200,100);
  // exp.velocityX = 10;
   cam.shapeColor = "white"
   cam.visible = true;

   kopGroup = createGroup()

  
fill(255)


angleMode(DEGREES);

   Engine.update(engine);
}



function draw(){
  background("black");
  

  

  

  
  Bodies1();
  Bodies2();
 

  display1();
  display2();
  
  


bounceTower()
  
  /*if(hit === true || hit2 === true || hit3 === true || hit4 === true || hit5 === true || hit6 === true || hit7 === true || hit8 === true || hit9 === true || hit10 === true || hit11 === true || hit12 === true || hit13 === true|| hit14 === true || hit15 === true || hit16 === true || hit17 === true|| hit18 === true || hit19 === true || hit20 === true|| hit21 === true || hit22 === true || hit23 === true || hit24 === true || hit25 === true|| hit26 === true || hit27 === true|| hit28 === true|| hit29 === true || hit30 === true || hit31 === true || hit32 === true || hit33 === true || hit34 === true || hit35 === true || hit36 === true || hit37 === true|| hit38 === true || hit39 === true || hit40 === true || hit41 === true|| hit42 === true|| hit43 === true|| hit44 === true|| hit45 === true || hit46 === true || hit47 === true || hit48 === true || hit49 === true || hit50 === true || hit51 === true || hit52 === true || hit53 === true|| hit54 === true || hit55 === true|| hit56 === true|| hit57 === true || hit58 === true || hit59 === true || hit60 === true || hit61 === true  || hit62 === true  || hit63 === true  || hit64 === true  || hit65 === true  || hit67 === true || hit68 === true  || hit69 === true  || hit70 === true || hit71 === true || hit72 === true || hit73 === true || hit74 === true || hit75 === true || hit76 === true || hit77 === true || hit78 === true || hit79 === true || hit80 === true || hit81 === true || hit82 === true || hit83 === true || hit84 === true || hit85 === true || hit86 === true || hit87 === true || hit88 === true || hit89 === true || hit90 === true || hit91 === true || hit92 === true  )
{
    player.shapeColor = "red";
    t1.body.shapeColor = "red";
    console.log('colliding?', hit);

    //player.collide(t1.body);
    player.velocityY=0;
    player.velocityX=0;

    if(keyIsDown(32)) 
      {
        bounceTower();
    
      }
  
}*/

 
/*if(kopGroup.isTouching(player))
{
  
  if(keyIsDown(32))
  {
 player.velocityY = -5
 }
 /*if(player.velocityY<0)
 {
   player.velocityY = player.velocityY + 0.8
 }*/
 /*else if (player.velocityY !== 0 ){
  player.velocityY = player.velocityY + 0.8
 } else (player.velocityY = 0)
}
*/

 



  
  camera.position.x = cam.x;
  text("P", 150,400, 20)
creatingObstacles();

  drawSprites();
}

function bounceTower()
{
    if(keyIsDown(32) ){
        player.velocityX=5;
        player.velocityY=-5;
    
    }
      else{
        player.velocityY= player.velocityY+0.8;
    }
}




/*
*/ 






