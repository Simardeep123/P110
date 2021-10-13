
Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
camera= document.getElementById("camera");
Webcam.attach(camera);
function TakeSnapshot(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML= '<img id="Img1" src="' + img + '">';
    })
}



var Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I2i_wOsET/model.json',Object_loaded);
function Object_loaded(){
    console.log('Object_loaded');
}