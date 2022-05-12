function startClassification(){
    navigator.mediaDevices.getUserMedia({
  audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Vno_uxZGB/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("model has benn loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}

