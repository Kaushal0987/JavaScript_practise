// DOMContentLoaded, load
window.addEventListener("load", (event) => {
    const frames = window.frames;
    for (let i = 0; i < frames.length; i++) {
        frames[i].document.body.style.background = "red";
        frames[i].document.body.childNodes[1].style.color = "white";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
});