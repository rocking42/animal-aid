$(document).ready(function() {

    var avideo = document.querySelector("a-video");
    var vidId = document.querySelector("#vidId");
    // avideo.removeFromParent();
    var video = document.querySelector("video");
    video.pause();


    //
    var scene = document.querySelector("a-scene");
    $("#rhinoBox").on("click", function() {
        avideo.addToParent(scene);
        vidId.addToParent(scene);
    });

    $("#rhinoBox").on("dblclick", function() {
        avideo.removeFromParent();
        vidId.removeFromParent();
    });

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            avideo.removeFromParent();
            vidId.removeFromParent();
            clearInterval(myInterval);
        }
    }, 1000);
});
