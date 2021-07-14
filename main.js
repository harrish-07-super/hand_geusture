prediction1 = ""
prediction2 = ""

Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    jpg_quality: 2000
});

camera = document.getElementById(camera);

Webcam.attach("camera");

function capture() {
    Webcam.snap(function(datauri){
document.getElementById("result").innerHTML='<img id="capture_img" src="'+datauri+'"/>';
    });
}

console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EifuAExnE/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}