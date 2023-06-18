
var opacityVal = 0
var intervalId = 0
var randomVal = 1
function changeMyImage() {
    const randomValue = randomIntFromInterval(1, 3);
    randomVal = randomValue
    //console.log(rndInt);    

  }

  

  window.onload = function() {
    changeMyImage()
    intervalId = setInterval(show,50)

  }
  

  
function show(){
  
  document.getElementById("bannerImage").src = "../images/banner_irfan_" + randomVal + ".png";
  var img = document.getElementById("bannerImage")
  img.style.opacity = opacityVal
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
  if(opacityVal<1){
    opacityVal = opacityVal + 0.1;
  }else{
    clearInterval(intervalId);
    clearInterval(intervalVal);
    
  }
}

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
 
