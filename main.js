noseX=0;
noseY=0;
function preload(){
    moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        noseX=results[0].pose.nose.x-23.5;
        console.log("noseX="+noseX);
        noseY=results[0].pose.nose.y+1;
        console.log("noseY="+noseY);
    }
    
}
function modelLoaded(){
    console.log("pooos nat is inisolized");
}
function draw(){
image(video,0,0,300,300)
image(moustache,noseX,noseY,50,40)
}
function take_snapshot(){
    save("Extremo_Funnyo.png");
}
