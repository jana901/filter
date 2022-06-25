function preload(){

}

function setup(){
create=createCanvas(300,300);
create.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modeLoaded);
posenet.on("pose",gotposes);
}
function gotposes(results){
    if (results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modeLoaded(){
    console.log("Pose Net is initialized");
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
    save("image.png");
}

