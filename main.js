//link for TeachableMachine: https://teachablemachine.withgoogle.com/models/axnN_77Px/ //

function startIdentification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/axnN_77Px/model.json', modelReady);
 }
 function modelReady(){
     classifier.classify(gotResults);
 }

 function gotResults(error , results){
     if(error){
        console.error(error);
     }
     else{
         console.log(results);
         random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;
     }
    
 }