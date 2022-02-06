canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images = ["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg","img_5.jpg"];

random_number = Math.floor(Math.random()*5);
console.log(random_number);

background_image = nasa_mars_images[random_number];
console.log("background image = "+ background_image);

rover_width = 100;
rover_height = 90;

x_rover = 10;
y_rover = 10;


rover_image = "rover.png";

function add(){
background_img_tag = new Image();
background_img_tag.onload = upload_Background;
background_img_tag.src = background_image;

rover_image_tag = new Image();
rover_image_tag.onload = upload_rover;
rover_image_tag.src = rover_image;
}

function upload_Background(){
ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_image_tag,x_rover,y_rover,rover_width,rover_height);
}

window.addEventListener("keydown",My_keydown);

function My_keydown(e){
key_pressed = e.keyCode;
console.log(key_pressed);

if(key_pressed == "38")
{
    console.log("up");
up();
}

if(key_pressed == "40")
{
console.log("down");
down();
}

if(key_pressed == "37")
{
console.log("left");
left();
}

if(key_pressed == "39")
{
    console.log("right");
    right();
}
}
function up(){

    if(y_rover >= 0){
y_rover = y_rover - 10;

console.log("when up arrow is pressed, x = "+ x_rover + " y = "+ y_rover);
upload_Background();
upload_rover();
    }
}

function down(){

    if(y_rover <=510){

        y_rover = y_rover + 10;

        console.log("when down arrow is pressed, x = "+ x_rover + " y = "+ y_rover);
        upload_Background();
        upload_rover();
    }
}

function left(){

    if(x_rover >=0){

        x_rover = x_rover - 10;

        console.log("when left arrow is pressed, x = "+ x_rover + " y = "+ y_rover);
        upload_Background();
        upload_rover();
    }
}

function right(){

    if(x_rover  <= 700){

        x_rover = x_rover + 10;

        console.log("when right arrow is pressed, x = "+ x_rover + " y = "+ y_rover);
        upload_Background();
        upload_rover();
    }
}
