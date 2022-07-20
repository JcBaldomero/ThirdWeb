// Navbar reponsive
function toggleBtn() {
    let navbar =  document.querySelector(".navlink-container");
    navbar.classList.toggle("toggleNav");
}





// Action pack section button
var video = document.getElementById("action-vid");
var playBtn = document.getElementById("pBtn");



function playFunction(){
    if (video.paused)  {
        video.play();
        pBtn.innerHTML ="&#9654;";

    }
    else {
        video.pause();
        pBtn.innerHTML = "&#10074; &#10074;"; 
        }
    
    
}






// Image Slider
var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block"; 
}



// Favorite Agent
function agentBtn1() {
    let agntBtn = document.querySelector(".agntBtn1");
    agntBtn.classList.toggle("agentToggle");
}

function agentBtn2() {
    let agntBtn = document.querySelector(".agntBtn2");
    agntBtn.classList.toggle("agentToggle");
}

function agentBtn3() {
    let agntBtn = document.querySelector(".agntBtn3");
    agntBtn.classList.toggle("agentToggle");
}

function agentBtn4() {
    let agntBtn = document.querySelector(".agntBtn4");
    agntBtn.classList.toggle("agentToggle");
}


// powered by slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.opacity = "1";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}