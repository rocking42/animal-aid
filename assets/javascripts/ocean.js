var triggerData = "";
var isPenguinOn = true;
var isOrcaOn = true;
var isDolphinOn = true;

var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var deleteDolphin = function () {
    showDolphin.removeFromParent();
    playDolphin.removeFromParent();
    isDolphinOn = false;
};

var deleteOrca = function() {
    showOrca.removeFromParent();
    playOrca.removeFromParent();
    isOrcaOn = false;
};

var deletePenguin = function() {
    playPenguin.removeFromParent();
    showPenguin.removeFromParent();
    isPenguinOn = false;
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
            deletePenguin();
            deleteOrca();
            deleteDolphin();
            clearInterval(myInterval);
        }
    }, 500);
});

var playPenguinEvent = function (event) {
    freezeVideos();
    if (isPenguinOn === true) {
        deletePenguin();
    } else {
        if (isOrcaOn === true) {
            deleteOrca();
        }
        if (isDolphinOn === true) {
            deleteDolphin();
        }
        showPenguin.addToParent("scene");
        playPenguin.addToParent("scene");
        var $playPenguinImage = $("#playPenguin").find("a-image");
        $playPenguinImage.trigger("click");
        isPenguinOn = true;
    }
};

var playDolphinEvent = function (event) {
    freezeVideos();
    if (isDolphinOn === true) {
        deleteDolphin();
    } else {
        if (isPenguinOn === true) {
            deletePenguin();
        }
        if (isOrcaOn === true) {
            deleteOrca();
        }
        showDolphin.addToParent("scene");
        playDolphin.addToParent("scene");
        var $playDolphinImage = $("#playDolphin").find("a-image");
        $playDolphinImage.trigger("click");
        isDolphinOn = true;
    }
};

var playOrcaEvent = function (event) {
    freezeVideos();
    if (isOrcaOn === true) {
        deleteOrca();
    } else {
        if (isPenguinOn === true) {
            deletePenguin();
        }
        if (isDolphinOn === true) {
            deleteDolphin();
        }
        showOrca.addToParent("scene");
        playOrca.addToParent("scene");
        var $playOrcaImage = $("#playOrca").find("a-image");
        $playOrcaImage.trigger("click");
        isOrcaOn = true;
    }
};
