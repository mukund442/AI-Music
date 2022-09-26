function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('model Loaded');
}

song="";
leftWristx=0;
leftWristy=0
rightWristx=0
rightWristy=0

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("left wrist x : " + leftWristx + " , leftwristy : " + leftWristy);

        rightWristx=results[0].pose.leftWrist.x;
        rightWristy=results[0].pose.leftWrist.y;
        console.log("right wrist x : " + rightWristx + " , rightwristy : " + rightWristy);
    }
}

function preload(){
    song=loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}