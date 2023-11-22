api = window.speechSynthesis;
g = ('Vitória, Legal, Tranquilo');

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aKARCvbSo/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
function check() {
  img = document.getElementById('result');
  classifier.classify(img, gotResult);
}

function gotResult() {
  if(result == error) {
    console.log('error');
  }
  else {
    console.log('result');
    document.getElementById("result_label").innerHTML = result[0].label;
    document.getElementById("result_label").innerHTML = result[0].confidence.toFixed[3];
  

function SpeechSynthesisUtterance() {
  document.getElementById("g");
}
function speak() {
  document.getElementById("api");
}}}
