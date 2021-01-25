//Create variables here
var dog,dogImg,dogImg1,database,foods,foodStock;
var firebase,database;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",foodStock);
  foodStock.set(20);

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
  
}


function draw() {  
  background("green");
  if(foods===undefined){
    textSize(20);
    fill(225);
    text("Note: Press the UP ARROW to feed the DRAGO milk",50,50);
    text("Food Remaing:"+foods,150,150);

    if(KeyWentDown(UP_ARROW)){
      writeStock(foods);
      dog.addImage(dogImg1);
    }
    if(KeyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
    }
    if(foods===0){
      foods=20;
    }
    drawSprites();
  }
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=0;
  }
  database.ref("/").update({
    food:x
  });
}



