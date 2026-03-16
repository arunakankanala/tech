const slider = document.getElementById("slider");

function slideLeft(){
slider.scrollLeft -= 300;
}

function slideRight(){
slider.scrollLeft += 300;
}

/* AUTO SLIDE EVERY 2 SECONDS */

setInterval(function(){

slider.scrollLeft += 300;

if(slider.scrollLeft >= slider.scrollWidth - slider.clientWidth){
slider.scrollLeft = 0;
}

},2000);