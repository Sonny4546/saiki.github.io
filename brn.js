window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let vid = document.getElementById("bgvideo");

function disableMute() { 
    vid.muted = false;
  } 