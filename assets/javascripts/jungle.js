$(document).ready(function() {

    var video = document.querySelector("video");
    video.pause();

    var scene = document.querySelector("a-scene");
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            clearInterval(myInterval);
        }
    }, 1000);
});
