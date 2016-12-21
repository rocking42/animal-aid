// Follows if each video is playing or not
var isPenguinOn = true;
var isOrcaOn = true;
var isDolphinOn = true;


// Iterates through all videos and pause them (cant override autoplay)
var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

//  THE NEXT 3 :
    // remove the video and controllers from site and reset the triggers

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

    // once the scene has loaded find all videos, controllers and scene and save them into variables
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


    // after saving them into variable sand loading the assets, delete the nodes off of the scene
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            deletePenguin();
            deleteOrca();
            deleteDolphin();
            clearInterval(myInterval);
        }
    }, 500);
});

//  EVENT LISTENERS FOR PLATFORMS
    // If selected video is playing and clicked again, shut it down
        // OTHERWISE get rid of the rest of the videos on scene and launch the current video

var playPenguinEvent = function (event) {
    if (isPenguinOn === true) { // If penguin is playing and clicked again, shut it down
        deletePenguin();
    } else { // OTHERWISE get rid of the rest of the videos on scene and launch the penguin video
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
