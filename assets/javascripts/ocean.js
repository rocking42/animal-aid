var $playOrca;
$(document).ready(function() {

    freezeVideos();


    var scene = document.querySelector("a-scene");
    var showPenguin = document.querySelector("#showPenguin");
    var playPenguin = document.querySelector("#playPenguin");
    var showDolphin = document.querySelector("#showDolphin");
    var playDolphin = document.querySelector("#playDolphin");
    var showOrca = document.querySelector("#showOrca");
    var playOrca = document.querySelector("#playOrca");

    $(".dolphin").on("click", function () {
        freezeVideos();
        showDolphin.addToParent("scene");
        playDolphin.addToParent("scene");
        var $playDolphinImage = $("#playDolphin").find("a-image");
        $playDolphinImage.trigger("click");
    });

    $(".penguin").on("click", function () {
        freezeVideos();
        showPenguin.addToParent("scene");
        playPenguin.addToParent("scene");
        var $playPenguinImage = $("#playPenguin").find("a-image");
        $playPenguinImage.trigger("click");
    });

    $(".orcaWhale").on("click", function () {
        freezeVideos();
        showOrca.addToParent("scene");
        playOrca.addToParent("scene");
        var $playOrcaImage = $("#playOrca").find("a-image");
        $playOrcaImage.trigger("click");
    });

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            showPenguin.removeFromParent();
            playPenguin.removeFromParent();
            playDolphin.removeFromParent();
            showDolphin.removeFromParent();
            playOrca.removeFromParent();
            showOrca.removeFromParent();
            clearInterval(myInterval);
        }
    }, 500);
});

var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};
