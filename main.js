
song= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,Modelloaded);
poseNet.on("pose",gotPosses);
}
function gotPosses(result){
if(result.length > 0 ){
console.log(result);
leftWristX = result[0].pose.leftWrist.x;
leftWristY = result[0].pose.leftWrist.y;
console.log("leftWristX = "+leftWristX+"leftwristY = "+leftWristY);
rightWristX = result[0].pose.rightWrist.x;
rightWristY = result[0].pose.rightWrist.y;
console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
}    
}
function Modelloaded(){
console.log("poseNet is inittialized")
}
function draw(){
image(video,0,0,600,500);

}
function preload(){
    song = loadSound("music.mp3");
}
function Burstyourears(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
