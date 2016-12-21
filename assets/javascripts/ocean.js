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
        showPenguin.removeFromParent();
    }
    if (document.querySelector("#playPenguin")) {
        playPenguin.removeFromParent();
    }
    if (document.querySelector("#showDolphin")) {
        playDolphin.removeFromParent();
    }
    if (document.querySelector("#playDolphin")) {
        showDolphin.removeFromParent();
    }
    if(document.querySelector("#showOrca")) {
        playOrca.removeFromParent();
    }
    if(document.querySelector("#playOrca")) {
        showOrca.removeFromParent();
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
    freezeVideos();
    if (trigger === false || triggerData != "penguin") {
        showDolphin.addToParent("scene");
        playDolphin.addToParent("scene");
        var $playDolphinImage = $("#playDolphin").find("a-image");
        $playDolphinImage.trigger("click");
        trigger = true;
        triggerData = event.target.attributes[0].value;
    } else {
        showDolphin.removeFromParent();
        playDolphin.removeFromParent();
        trigger = false;
    }
};

var playDolphinEvent = function (event) {
    freezeVideos();
    if (trigger === false || triggerData != "dolphin") {
        showDolphin.addToParent("scene");
        playDolphin.addToParent("scene");
        var $playDolphinImage = $("#playDolphin").find("a-image");
        $playDolphinImage.trigger("click");
        trigger = true;
        triggerData = event.target.attributes[0].value;
    } else {
        showDolphin.removeFromParent();
        playDolphin.removeFromParent();
        trigger = false;
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
