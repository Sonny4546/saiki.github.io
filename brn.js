let vid = document.getElementById("bgvideo");

function AudioToggle() { 
    vid.muted = !vid.muted;
} 

let glow = document.getElementById("tlGlow");

function GlowToggle() {
    glow.style.animation = "none";
    glow.style.animation = "titleGlow 0.75s";
    window.location.href = '#section2';
    setTimeout(() => {  glow.style.animation = "none"; }, 1000);
}