$(document).ready(function() {

    var avideo = document.querySelector("a-video");
    // avideo.removeFromParent();
    var video = document.querySelector("video");
    video.pause();


    //
    var scene = document.querySelector("a-scene");
    $("#rhinoBox").on("click", function() {
        video.addToParent(scene);
    });

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            avideo.removeFromParent();
            clearInterval(myInterval);
        }
    }, 1000);
});
