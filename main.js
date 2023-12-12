var canvas= new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;

var player_object="";
var blockImage="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
      player_object=Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({
       top:player_y,
       left:player_x 
      })  ;
      canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
      blockImage=Img;
      blockImage.scaleToWidth(block_image_width);
      blockImage.scaleToHeight(block_image_height);
      blockImage.set({
       top:player_y,
       left:player_x 
      })  ;
      canvas.add(blockImage);
    });
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
  keypressed= e.keyCode;
  console.log(keypressed);

  if (keypressed=='67'){
    new_image('cloud.jpg');
  }
  if (keypressed=='68'){
    new_image('dark_green.png');
  }
if (keypressed=='71'){
  new_image('ground.png');
}
if (keypressed=='76'){
  new_image('light_green.png');
}
if (keypressed=='82'){
  new_image('roof.jpg');
}
if (keypressed=='84'){
  new_image('trunk.jpg');
}
if(keypressed=='85'){
  new_image('unique.png');
}
if(keypressed=='87'){
  new_image('wall.jpg');
}
if(keypressed=='89'){
  new_image('yellow_wall.png');
}
if(keypressed=='38'){
  console.log("up");
up();
}
if(keypressed=='40'){
  console.log("down");
  down();
}
if(keypressed=='39'){
  console.log("right");
  right();
}
if(keypressed=='37'){
console.log("left");
left();
}
if(keypressed=='8'){
  canvas.remove(blockImage);
}

}
function up(){
  if(player_y>=0){
   player_y=player_y-block_image_height;
   canvas.remove(player_object);
   player_update();
  }

}
function down(){
  if(player_y<=500){
    player_y=player_y+block_image_height;
    canvas.remove(player_object);
    player_update();
  }
}
function left(){
  if(player_x>=0){
    player_x=player_x-block_image_width;
    canvas.remove(player_object);
    player_update();

  }
}
function right(){
  if(player_x<900){
    player_x=player_x+block_image_width;
    canvas.remove(player_object);
    player_update()
  }
}