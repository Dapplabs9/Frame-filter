function preload(){
    frame = loadImage("https://i.postimg.cc/DzT41484/unnamed.png")
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
    image(frame, 0, 0, 640, 480)
}
function take_snapshot(){
    save("me.png");
}
