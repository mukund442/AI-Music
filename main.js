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

song1="";
song2="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
scoreRightWrist=0;
scoreLeftWrist=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("left wrist x : " + leftWristx + " , leftwristy : " + leftWristy);

        rightWristx=results[0].pose.leftWrist.x;
        rightWristy=results[0].pose.leftWrist.y;
        console.log("right wrist x : " + rightWristx + " , rightwristy : " + rightWristy);

        scoreRightWrist=result[0].pose.keypoints[9].score;
        scoreLeftWrist=result[0].pose.keypoints[10].score;
        console.log("socre of right wrist : " + scoreRightWrist + "score of left wrist : " + scoreLeftWrist);
    }
}

function preload(){
    song1=loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

    song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song_name").innerHTML = "Playing - Harry Potter Theme Song"
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song_name").innerHTML = "Playing - Peter Pan Song"
		}
	}
}

function player(){
    song.play();
}