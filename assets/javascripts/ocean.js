var trigger = false;
var triggerData = "";

var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var deleteVideos = function() {
    if (document.querySelector("#showPenguin")) {
        document.querySelector("#showPenguin").removeFromParent();
    }
    if (document.querySelector("#playPenguin")) {
        document.querySelector("#playPenguin").removeFromParent();
    }
    if (document.querySelector("#showDolphin")) {
        document.querySelector("#showDolphin").removeFromParent();
    }
    if (document.querySelector("#playDolphin")) {
        document.querySelector("#playDolphin").removeFromParent();
    }
    if(document.querySelector("#showOrca")) {
        document.querySelector("#showOrca").removeFromParent();
    }
    if(document.querySelector("#playOrca")) {
        document.querySelector("#playOrca").removeFromParent();
    }
};


$(document).ready(function() {

    freezeVideos();

    var scene = document.querySelector("a-scene");
    var showPenguin = document.querySelector("#showPenguin");
    var playPenguin = document.querySelector("#playPenguin");
    var showDolphin = document.querySelector("#showDolphin");
    var playDolphin = document.querySelector("#playDolphin");
    var showOrca = document.querySelector("#showOrca");
    var playOrca = document.querySelector("#playOrca");

    $(".dolphin").on("click", playDolphinEvent );

    $(".penguin").on("click", playPenguinEvent );

    $(".orcaWhale").on("click", playOrcaEvent );

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            deleteVideos();
            clearInterval(myInterval);
        }
    }, 500);
});

var playPenguinEvent = function (event) {
    deleteVideos();
    if (trigger === true || triggerData === "penguin") {
        showPenguin.removeFromParent();
        playPenguin.removeFromParent();
        trigger = false;
    } else {

        showPenguin.addToParent("scene");
        playPenguin.addToParent("scene");
        var $playPenguinImage = $("#playPenguin").find("a-image");
        $playPenguinImage.trigger("click");
        trigger = true;
        triggerData = event.target.attributes[0].value;
    }
};

var playDolphinEvent = function (event) {
    deleteVideos();
    if (trigger === true || triggerData === "dolphin") {
        showDolphin.removeFromParent();
        playDolphin.removeFromParent();
        trigger = false;
    } else {

        showDolphin.addToParent("scene");
        playDolphin.addToParent("scene");
        var $playDolphinImage = $("#playDolphin").find("a-image");
        $playDolphinImage.trigger("click");
        trigger = true;
        triggerData = event.target.attributes[0].value;
    }
};

var playOrcaEvent = function (event) {
    deleteVideos();
    if (trigger === true || triggerData === "orca") {
        showOrca.removeFromParent();
        playOrca.removeFromParent();
        trigger = false;
    } else {

        showOrca.addToParent("scene");
        playOrca.addToParent("scene");
        var $playOrcaImage = $("#playOrca").find("a-image");
        $playOrcaImage.trigger("click");
        trigger = true;
        triggerData = event.target.attributes[0].value;
    }
};
