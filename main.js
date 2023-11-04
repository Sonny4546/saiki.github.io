let vid = document.getElementById("bgvideo");
let nte = document.getElementById("note");
let off = document.getElementById("off");

function AudioToggle() {
    if( vid.muted == true ) {
        vid.muted = !vid.muted;
        nte.style.animation = "none";
        nte.style.opacity = "0%";
        off.style.display = "none";

    } else {
        vid.muted = !vid.muted;
        off.style.display = "";
    } 
}

let btn = document.getElementById("btn");

(function () {
    btn.style.display = "none";
    setTimeout(() => {btn.style.display = "";}, 2000);
}) ();

let glow = document.getElementById("tlGlow");
let animt = document.getElementById("title");
let fade = document.getElementById("tlfade");
let drop = document.getElementById("dropsh");

function TitleClick() {
    glow.style.animation = "none";
    glow.style.animation = "titleGlow 1s";
    animt.style.transform = "scale(1.2)";
    animt.style.opacity = "100%";
    drop.style.transform = "scale(1.2)";
    fade.style.opacity = "25%";
    fade.style.transform = "translateY(-230px) skewx(-10deg)";
    setTimeout(() => {  window.location.href = '#section2'; }, 1000);
    setTimeout(() => {  animt.style.transform = "scale(1)"; }, 1000);
    setTimeout(() => {  drop.style.transform = "scale(1)"; }, 1000);
    setTimeout(() => {  fade.style.opacity = ""; }, 750);
    setTimeout(() => {  fade.style.transform = ""; }, 1750);
    setTimeout(() => {  glow.style.animation = "none"; }, 1750);
}

setInterval(function() {
    setTimeout(() => {
    animt.style.opacity = "0%";
    drop.style.opacity = "0%";
    fade.style.opacity = "0%";
    vid.style.opacity = "75%";
    }, 3500);
}, 2000); 

window.onclick = function () {
    animt.style.opacity = "100%";
    drop.style.opacity = "100%";
    fade.style.opacity = "100%";
    vid.style.opacity = "50%";
};
window.onmousemove = function () {
    animt.style.opacity = "100%";
    drop.style.opacity = "100%";
    fade.style.opacity = "100%";
    vid.style.opacity = "50%";
};
window.onscroll = function () {
    animt.style.opacity = "100%";
    drop.style.opacity = "100%";
    fade.style.opacity = "100%";
    vid.style.opacity = "50%";
};

let ext = document.getElementById("ext");
let dwh = document.getElementById("dwh");
let uj = document.getElementById("uj");
let xxiv = document.getElementById("xxiv");
let slk = document.getElementById("slk");

let extbtn = document.getElementById("extbtn");
let dwhbtn = document.getElementById("dwhbtn");
let ujbtn = document.getElementById("ujbtn");
let xxivbtn = document.getElementById("xxivbtn");
let slkbtn = document.getElementById("slkbtn");

let arrL = document.getElementById("arrow_l");
let arrR = document.getElementById("arrow_r");
let al0 = document.getElementById("al");
let al1 = document.getElementById("al1");
let al2 = document.getElementById("al2");
let al3 = document.getElementById("al3");
let al4 = document.getElementById("al4");

let right = document.getElementById("next");
let left = document.getElementById("prev");

let main = document.getElementById("mainwrap");
let all = document.getElementById("all");

let slkv = document.getElementById("slkvideo");
let xxivv = document.getElementById("xxivvideo");
let ujv = document.getElementById("ujvideo");
let dwhv = document.getElementById("dwhvideo");
let extv = document.getElementById("extvideo");

(function() {
    setTimeout(() => {
    slkv.style.opacity = "100%";
    }, 3000); 
}) ();

function xxivmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    slk.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    ext.style.display = "none";
    slkv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  xxivv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  xxiv.style.animation = "RighttoMain 0.25s ease-in-out forwards"; }, 250);
    setTimeout(() => {  uj.style.animation = "Rightto2nd 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => {  dwh.style.animation = "Rightto3rd 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { al4.style.animation = "slk 0.2s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { xxivbtn.style.cssText = "display: inline-block;" }, 1000);
    setTimeout(() => { al3.style.animation = "xxiv 0.5s ease-in-out forwards" }, 250);
    right.setAttribute('onclick','ujmain()');
    left.setAttribute('onclick','xxivtoslkmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function ujmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    ext.style.display = "";
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    xxiv.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  ujv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  uj.style.animation = "RighttoMain 0.25s ease-in-out forwards"; }, 250);
    setTimeout(() => {  dwh.style.animation = "Rightto2nd 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => {  ext.style.animation = "Rightto3rd 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { al3.style.animation = "xxiv 0.2s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al2.style.animation = "uj 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { ujbtn.style.cssText = "display: inline-block;" }, 250);
    right.setAttribute('onclick','dwhmain()');
    left.setAttribute('onclick','ujtoxxivmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function dwhmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    uj.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  dwhv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  dwh.style.animation = "RighttoMain 0.25s ease-in-out forwards"; }, 250);
    setTimeout(() => {  ext.style.animation = "Rightto2nd 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { al2.style.animation = "uj 0.2s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al1.style.animation = "dwh 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { dwhbtn.style.cssText = "display: inline-block;" }, 250);
    right.setAttribute('onclick','extmain()');
    left.setAttribute('onclick','dwhtoujmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function extmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    dwh.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    setTimeout(() => {  extv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  ext.style.animation = "RighttoMain 0.25s ease-in-out forwards"; }, 250);
    setTimeout(() => { al1.style.animation = "uj 0.2s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al0.style.animation = "ext 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { extbtn.style.cssText = "display: inline-block;" }, 250);
    right.setAttribute('onclick','slkmain()');
    left.setAttribute('onclick','exttodwhmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function slkmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    ext.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  slkv.style.opacity = "100%"; }, 3000);
    setTimeout(() => { xxivbtn.style.cssText = "display: none;" }, 750);
    setTimeout(() => { ujbtn.style.cssText = "display: none;" }, 750);
    setTimeout(() => { dwhbtn.style.cssText = "display: none;" }, 750);
    setTimeout(() => { extbtn.style.cssText = "display: none;" }, 750);
    setTimeout(() => {
        ext.style.cssText = `
        opacity: 0%;
        transform: scale(30%) translateY(281px) translateX(1554px) rotateX(4deg) rotateY(346deg) skewY(1deg) skewX(357deg)
        filter: blur(0px);
        animation: none;`;
        dwh.style.cssText = `
        opacity: 0%;
        transform: scale(30%) translateY(281px) translateX(1554px) rotateX(4deg) rotateY(346deg) skewY(1deg) skewX(357deg)
        filter: blur(0px);
        animation: none;`;
        uj.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
        xxiv.style.cssText = `
        opacity: 100%
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
        slk.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
        al0.style.animation = "none";
        al1.style.animation = "none";
        al2.style.animation = "none";
        al3.style.animation = "none";
        al4.style.animation = "slk 0.5s ease-in-out forwards";
    }, 500);
    right.setAttribute('onclick','xxivmain()');
    left.setAttribute('onclick','slktoextmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);
}

function slktoextmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    slk.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    xxiv.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    uj.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    dwh.style.animation = "MaintoOut 0.25s ease-in-out forwards";
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    setTimeout(() => {  extv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  ext.style.animation = "MaintoOut 0.25s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al1.style.animation = "uj 0.2s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al0.style.animation = "ext 0.5s ease-in-out forwards"; }, 250);
    setTimeout(() => { extbtn.style.cssText = "display: inline-block;" }, 250);
    right.setAttribute('onclick','slkmain()');
    left.setAttribute('onclick','exttodwhmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function xxivtoslkmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    setTimeout(() => { slk.style.animation = "MaintoOut 0.25s ease-in-out reverse forwards"; }, 500);
    ext.style.display = "none";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  slkv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  xxiv.style.animation = "RighttoMain 0.25s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => {  uj.style.animation = "Rightto2nd 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => {  dwh.style.animation = "Rightto3rd 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al4.style.animation = "slk 0.2s ease-in-out forwards"; }, 250);
    setTimeout(() => { al3.style.animation = "xxiv 0.5s ease-in-out reverse forwards"; }, 250);
    right.setAttribute('onclick','xxivmain()');
    left.setAttribute('onclick','slktoextmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(30%) translateY(281px) translateX(1554px) rotateX(4deg) rotateY(346deg) skewY(1deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function ujtoxxivmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    setTimeout(() => { xxiv.style.animation = "MaintoOut 0.25s ease-in-out reverse forwards"; }, 500);
    setTimeout(() => { ext.style.display = "none"; }, 500);
    slkv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  xxivv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  uj.style.animation = "RighttoMain 0.25s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => {  dwh.style.animation = "Rightto2nd 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => {  ext.style.animation = "Rightto3rd 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al3.style.animation = "xxiv 0.2s ease-in-out forwards"; }, 250);
    setTimeout(() => { al2.style.animation = "uj 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { xxivbtn.style.cssText = "display: block;" }, 250);
    setTimeout(() => { ujbtn.style.cssText = "display: none;" }, 250);
    right.setAttribute('onclick','ujmain()');
    left.setAttribute('onclick','xxivtoslkmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        display: none;
        opacity: 0%;
        filter: blur(0px);
        transform: scale(30%) translateY(281px) translateX(1554px) rotateX(4deg) rotateY(346deg) skewY(1deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function dwhtoujmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    setTimeout(() => { uj.style.animation = "MaintoOut 0.25s ease-in-out reverse forwards"; }, 500);
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    dwhv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  ujv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  dwh.style.animation = "RighttoMain 0.25s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => {  ext.style.animation = "Rightto2nd 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al2.style.animation = "uj 0.2s ease-in-out forwards"; }, 250);
    setTimeout(() => { al1.style.animation = "dwh 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { ujbtn.style.cssText = "display: inline-block;" }, 250);
    setTimeout(() => { dwhbtn.style.cssText = "none;" }, 250);
    right.setAttribute('onclick','dwhmain()');
    left.setAttribute('onclick','ujtoxxivmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 50%;
        filter: blur(6px);
        transform: scale(40%) translateY(72px) translateX(928px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

function exttodwhmain() {
    all.style.pointerEvents = "none";
    setTimeout(() => { all.style.pointerEvents = "auto";}, 1000);
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    setTimeout(() => { dwh.style.animation = "MaintoOut 0.25s ease-in-out reverse forwards"; }, 500);
    slkv.style.opacity = "0%";
    xxivv.style.opacity = "0%";
    ujv.style.opacity = "0%";
    extv.style.opacity = "0%";
    setTimeout(() => {  dwhv.style.opacity = "100%"; }, 3000);

    setTimeout(() => {  ext.style.animation = "RighttoMain 0.25s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { al1.style.animation = "uj 0.2s ease-in-out forwards"; }, 250);
    setTimeout(() => { al0.style.animation = "ext 0.5s ease-in-out reverse forwards"; }, 250);
    setTimeout(() => { dwhbtn.style.cssText = "display: inline-block;" }, 250);
    setTimeout(() => { extbtn.style.cssText = "none;" }, 250);
    right.setAttribute('onclick','extmain()');
    left.setAttribute('onclick','dwhtoujmain()');
    setTimeout(() => {right.style.display = "";}, 1000);
    setTimeout(() => {left.style.display = "";}, 1000);
    setTimeout(() => {arrL.style.opacity = "100%";}, 1000);
    setTimeout(() => {arrR.style.opacity = "100%";}, 1000);

    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        xxiv.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        uj.style.cssText = `
        opacity: 0%;
        filter: blur(0px);
        transform: scale(70%) translateY(-730px) translateX(-1110px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        dwh.style.cssText = `
        opacity: 100%;
        filter: blur(0px);
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
    setTimeout(()=> {
        ext.style.cssText = `
        opacity: 100%;
        filter: blur(3px);
        transform: scale(50%) translateY(-85px) translateX(417px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 1000);
}

let extshine = document.getElementById("shine0");
let dwhshine = document.getElementById("shine1");
let ujshine = document.getElementById("shine2");
let xxivshine = document.getElementById("shine3");
let slkshine = document.getElementById("shine4");

slkbtn.onmouseover = function(){slkover()};
slkbtn.onmouseout = function(){slkout()}

function slkover() {
    slkshine.style.cssText = `animation: shine 0.5s ease-in-out forwards;`;
    setTimeout(()=> { slkshine.style.cssText = `animation: none;` }, 500);
}
function slkout() {
    slkshine.style.cssText = `animation: shine 0.5s ease-in-out reverse forwards;`;
    setTimeout(()=> { slkshine.style.cssText = `animation: none;` }, 500);
}

xxivbtn.onmouseover = function(){xxivover()};
xxivbtn.onmouseout = function(){xxivout()};

function xxivover() {
    xxivshine.style.cssText = `animation: shine 0.5s ease-in-out forwards;`;
    setTimeout(()=> { xxivshine.style.cssText = `animation: none;` }, 500);
}
function xxivout() {
    xxivshine.style.cssText = `animation: shine 0.5s ease-in-out reverse forwards;`;
    setTimeout(()=> { xxivshine.style.cssText = `animation: none;` }, 500);
}

ujbtn.onmouseover = function(){ujover()};
ujbtn.onmouseout = function(){ujout()};

function ujover() {
    ujshine.style.cssText = `animation: shine 0.5s ease-in-out forwards;`;
    setTimeout(()=> { ujshine.style.cssText = `animation: none;` }, 500);
}
function ujout() {
    ujshine.style.cssText = `animation: shine 0.5s ease-in-out reverse forwards;`;
    setTimeout(()=> { ujshine.style.cssText = `animation: none;` }, 500);
}

dwhbtn.onmouseover = function(){dwhover()};
dwhbtn.onmouseout = function(){dwhout()};

function dwhover() {
    dwhshine.style.cssText = `animation: shine 0.5s ease-in-out forwards;`;
    setTimeout(()=> { dwhshine.style.cssText = `animation: none;` }, 500);
}
function dwhout() {
    dwhshine.style.cssText = `animation: shine 0.5s ease-in-out reverse forwards;`;
    setTimeout(()=> { dwhshine.style.cssText = `animation: none;` }, 500);
}

extbtn.onmouseover = function(){extover()};
extbtn.onmouseout = function(){extout()};

function extover() {
    extshine.style.cssText = `animation: shine 0.5s ease-in-out forwards;`;
    setTimeout(()=> { extshine.style.cssText = `animation: none;` }, 500);
}
function extout() {
    extshine.style.cssText = `animation: shine 0.5s ease-in-out reverse forwards;`;
    setTimeout(()=> { extshine.style.cssText = `animation: none;` }, 500);
}

let table0 = document.getElementById("exttable");
let table1 = document.getElementById("dwhtable");
let table2 = document.getElementById("ujtable");
let table3 = document.getElementById("xxivtable");
let table4 = document.getElementById("slktable");
let div = document.getElementById("contdiv");

function enterslk() {
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    slk.style.animation = "enterAlbum 0.5s ease-in-out forwards";
    slkbtn.style.cssText = "display: none;";

    slkbtn.setAttribute('onclick','exitslk()');
    div.style.height = "1518px";
    setTimeout(() => {  table4.style.display = "table"; }, 250);
    setTimeout(() => {  xxiv.style.opacity = "0%"; }, 250);
    setTimeout(() => {  uj.style.opacity = "0%"; }, 250);
    setTimeout(() => {  dwh.style.opacity = "0%"; }, 250);
    setTimeout(() => { slk.style.animation = "none"; }, 750);
    setTimeout(() => { slkbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 100%;
        transform: scale(70%) translateY(-110px) translateX(80px) rotateX(0deg) rotateY(0deg) skewY(0deg) skewX(0deg);
        animation: none;`;
    }, 750);
}

function exitslk() {
    window.location.href = '#section2';
    right.style.display = "";
    left.style.display = "";
    arrL.style.opacity = "100%";
    arrR.style.opacity = "100%";
    slk.style.animation = "enterAlbum 0.5s ease-in-out reverse forwards";
    slkbtn.style.cssText = "display: none;";

    slkbtn.setAttribute('onclick','enterslk()');
    setTimeout(() => {  div.style.height = "759px"; }, 1000);
    setTimeout(() => {  table4.style.animation = "fadeOut 0.75s ease-in-out"; }, 250);
    setTimeout(() => {  table4.style.display = "none"; }, 1000);
    setTimeout(() => {  xxiv.style.opacity = "100%"; }, 250);
    setTimeout(() => {  uj.style.opacity = "100%"; }, 250);
    setTimeout(() => {  dwh.style.opacity = "0%"; }, 250);
    setTimeout(() => { slk.style.animation = "none"; }, 750);
    setTimeout(() => { slkbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        slk.style.cssText = `
        opacity: 100%;
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 750);
}

function enterxxiv() {
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    xxiv.style.animation = "enterAlbum 0.5s ease-in-out forwards";
    xxivbtn.style.cssText = "display: none;";

    xxivbtn.setAttribute('onclick','exitxxiv()');
    div.style.height = "1518px";
    setTimeout(() => {  table3.style.display = "table"; }, 250);
    setTimeout(() => {  uj.style.opacity = "0%"; }, 250);
    setTimeout(() => {  dwh.style.opacity = "0%"; }, 250);
    setTimeout(() => { xxiv.style.animation = "none"; }, 750);
    setTimeout(() => { xxivbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        xxiv.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(70%) translateY(-110px) translateX(80px) rotateX(0deg) rotateY(0deg) skewY(0deg) skewX(0deg);
        animation: none;`;
    }, 750);
}

function exitxxiv() {
    window.location.href = '#section2';
    right.style.display = "";
    left.style.display = "";
    arrL.style.opacity = "100%";
    arrR.style.opacity = "100%";
    xxiv.style.animation = "enterAlbum 0.5s ease-in-out reverse forwards";
    xxivbtn.style.cssText = "display: none;";

    xxivbtn.setAttribute('onclick','enterxxiv()');
    setTimeout(() => {  div.style.height = "759px"; }, 1000);
    setTimeout(() => {  table3.style.animation = "fadeOut 0.75s ease-in-out"; }, 250);
    setTimeout(() => {  table3.style.display = "none"; }, 1000);
    setTimeout(() => {  xxiv.style.opacity = "100%"; }, 250);
    setTimeout(() => {  uj.style.opacity = "100%"; }, 250);
    setTimeout(() => {  dwh.style.opacity = "50%"; }, 250);
    setTimeout(() => { xxiv.style.animation = "none"; }, 750);
    setTimeout(() => { xxivbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        xxiv.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 750);
}

function enteruj() {
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    uj.style.animation = "enterAlbum 0.5s ease-in-out forwards";
    ujbtn.style.cssText = "display: none;";

    ujbtn.setAttribute('onclick','exituj()');
    div.style.height = "1518px";
    setTimeout(() => {  table2.style.display = "table"; }, 250);
    setTimeout(() => {  dwh.style.opacity = "0%"; }, 250);
    setTimeout(() => {  ext.style.opacity = "0%"; }, 250);
    setTimeout(() => { uj.style.animation = "none"; }, 750);
    setTimeout(() => { ujbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        uj.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(70%) translateY(-110px) translateX(80px) rotateX(0deg) rotateY(0deg) skewY(0deg) skewX(0deg);
        animation: none;`;
    }, 750);
}

function exituj() {
    window.location.href = '#section2';
    right.style.display = "";
    left.style.display = "";
    arrL.style.opacity = "100%";
    arrR.style.opacity = "100%";
    uj.style.animation = "enterAlbum 0.5s ease-in-out reverse forwards";
    ujbtn.style.cssText = "display: none;";

    ujbtn.setAttribute('onclick','enteruj()');
    setTimeout(() => {  div.style.height = "759px"; }, 1000);
    setTimeout(() => {  table2.style.animation = "fadeOut 0.75s ease-in-out"; }, 250);
    setTimeout(() => {  table2.style.display = "none"; }, 1000);
    setTimeout(() => {  dwh.style.opacity = "100%"; }, 250);
    setTimeout(() => {  ext.style.opacity = "50%"; }, 250);
    setTimeout(() => { uj.style.animation = "none"; }, 750);
    setTimeout(() => { ujbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        uj.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 750);
}

function enterdwh() {
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    dwh.style.animation = "enterAlbum 0.5s ease-in-out forwards";
    dwhbtn.style.cssText = "display: none;";

    dwhbtn.setAttribute('onclick','exitdwh()');
    div.style.height = "1518px";
    setTimeout(() => {  table1.style.display = "table"; }, 250);
    setTimeout(() => {  ext.style.opacity = "0%"; }, 250);
    setTimeout(() => { dwh.style.animation = "none"; }, 750);
    setTimeout(() => { dwhbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        dwh.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(70%) translateY(-110px) translateX(80px) rotateX(0deg) rotateY(0deg) skewY(0deg) skewX(0deg);
        animation: none;`;
    }, 750);
}

function exitdwh() {
    window.location.href = '#section2';
    right.style.display = "";
    left.style.display = "";
    arrL.style.opacity = "100%";
    arrR.style.opacity = "100%";
    dwh.style.animation = "enterAlbum 0.5s ease-in-out reverse forwards";
    dwhbtn.style.cssText = "display: none;";

    dwhbtn.setAttribute('onclick','enterdwh()');
    setTimeout(() => {  div.style.height = "759px"; }, 1000);
    setTimeout(() => {  table1.style.animation = "fadeOut 0.75s ease-in-out"; }, 250);
    setTimeout(() => {  table1.style.display = "none"; }, 1000);
    setTimeout(() => {  dwh.style.opacity = "100%"; }, 250);
    setTimeout(() => {  ext.style.opacity = "100%"; }, 250);
    setTimeout(() => { dwh.style.animation = "none"; }, 750);
    setTimeout(() => { dwhbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        dwh.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 750);
}

function enterext() {
    right.style.display = "none";
    left.style.display = "none";
    arrL.style.opacity = "0%";
    arrR.style.opacity = "0%";
    ext.style.animation = "enterAlbum 0.5s ease-in-out forwards";
    extbtn.style.cssText = "display: none;";

    extbtn.setAttribute('onclick','exitext()');
    div.style.height = "1518px";
    setTimeout(() => {  table0.style.display = "table"; }, 250);
    setTimeout(() => { ext.style.animation = "none"; }, 750);
    setTimeout(() => { extbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        ext.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(70%) translateY(-110px) translateX(80px) rotateX(0deg) rotateY(0deg) skewY(0deg) skewX(0deg);
        animation: none;`;
    }, 750);
}

function exitext() {
    window.location.href = '#section2';
    right.style.display = "";
    left.style.display = "";
    arrL.style.opacity = "100%";
    arrR.style.opacity = "100%";
    ext.style.animation = "enterAlbum 0.5s ease-in-out reverse forwards";
    extbtn.style.cssText = "display: none;";

    extbtn.setAttribute('onclick','enterext()');
    setTimeout(() => {  div.style.height = "759px"; }, 1000);
    setTimeout(() => {  table0.style.animation = "fadeOut 0.75s ease-in-out"; }, 250);
    setTimeout(() => {  table0.style.display = "none"; }, 1000);
    setTimeout(() => { ext.style.animation = "none"; }, 750);
    setTimeout(() => { extbtn.style.cssText = "display: block;" }, 1500);
    setTimeout(()=> {
        ext.style.cssText = `
        filter: blur(0px);
        opacity: 100%;
        transform: scale(60%) translateY(-190px) translateX(-70px) rotateX(5deg) rotateY(345deg) skewY(2deg) skewX(357deg);
        animation: none;`;
    }, 750);
}