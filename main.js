song = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
song2 = "";
function preload() {
    song = loadSound("music.mp3")
    song2 = loadSound("1.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500)
    fill("red")
    stroke("red")
    if (scoreRightWrist > 0.2) {
        song.stop()
        song2.play()
        document.getElementById("song").innerHTML="kaala chashma"
    }
    if (scoreLeftWrist > 0.2) {
        song2.stop()
        song.play()
        document.getElementById("song").innerHTML="music"

    }
}
function modelLoaded() { console.log("posenetisintiazid"); }
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        scoreRightWrist = result[0].pose.keypoints[10].score;
        scoreLeftWrist = result[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
    }
}
function play() {
    song.play();
}
