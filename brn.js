let vid = document.getElementById("bgvideo");

function AudioToggle() { 
    vid.muted = !vid.muted;
} 

let btn = document.getElementById("btn");

(function () {
    btn.style.display = "none";
    setTimeout(() => {btn.style.display = "";}, 1750);
}) ();

let glow = document.getElementById("tlGlow");
let animt = document.getElementById("title");
let fade = document.getElementById("tlfade");
let drop = document.getElementById("dropsh");

function TitleClick() {
    glow.style.animation = "none";
    glow.style.animation = "titleGlow 1s";
    animt.style.transform = "scale(1.2)";
    drop.style.transform = "scale(1.2)";
    fade.style.opacity = "25%";
    fade.style.transform = "translateY(-230px) skewx(-10deg)";
    setTimeout(() => {  window.location.href = '#section2'; }, 1000);
    setTimeout(() => {  animt.style.transform = "scale(1)"; }, 1000);
    setTimeout(() => {  drop.style.transform = "scale(1)"; }, 1000);
    setTimeout(() => {  fade.style.opacity = ""; }, 750);
    setTimeout(() => {  fade.style.transform = "translateY(-230px)"; }, 1750);
    setTimeout(() => {  glow.style.animation = "none"; }, 1750);
}