// Follows if each video is playing or not
var isPenguinOn = true;
var isOrcaOn = true;
var isDolphinOn = true;
var isSharkOn = true;


// Iterates through all videos and pause them (cant override autoplay)
var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var redirectHome = function(){
    window.location.href = '/index.html';
};

var goJungling = function(){
    window.location.href = '/jungle.html';
};

//  THE NEXT 4 :
    // remove the video and controllers from site and reset the triggers

var deleteDolphin = function () {
    showDolphin.removeFromParent();
    playDolphin.removeFromParent();
    isDolphinOn = false;
};

var deleteShark = function () {
    showShark.removeFromParent();
    playShark.removeFromParent();
    isSharkOn = false;
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
    var showShark = document.querySelector("#showShark");
    var playShark = document.querySelector("#playShark");
    var userCam = document.querySelector("#userCam");



    $(".dolphin").on("click", playDolphinEvent );

    $(".penguin").on("click", playPenguinEvent );

    $(".orcaWhale").on("click", playOrcaEvent );

    $(".shark").on("click", playSharkEvent );

    $(".goHome").on("click", function() {
        var floor = document.querySelector(".floor");
        floor.attributes[5].value="0 5 0";
        userCam.removeAttribute("universal-controls");
        userCam.setAttribute("rotation", "73 -33 0");
        var goingHome = window.setTimeout(redirectHome, 5000);
    });

    $(".goJungling").on("click", function() {
        var floor = document.querySelector(".floor");
        floor.attributes[5].value="0 5 0";
        userCam.removeAttribute("universal-controls");
        userCam.setAttribute("rotation", "73 -33 0");
        var goingJungling = window.setTimeout(goJungling, 5000);
    });
    // after saving them into variable sand loading the assets, delete the nodes off of the scene
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            deletePenguin();
            deleteOrca();
            deleteDolphin();
            deleteShark();
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
        if (isSharkOn === true) {
            deleteShark();
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
        if (isSharkOn === true) {
            deleteShark();
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
        if (isSharkOn === true) {
            deleteShark();
        }
        showOrca.addToParent("scene");
        playOrca.addToParent("scene");
        var $playOrcaImage = $("#playOrca").find("a-image");
        $playOrcaImage.trigger("click");
        isOrcaOn = true;
    }
};

var playSharkEvent = function (event) {
    if (isSharkOn === true) {
        deleteShark();
    } else {
        if (isPenguinOn === true) {
            deletePenguin();
        }
        if (isDolphinOn === true) {
            deleteDolphin();
        }
        if (isOrcaOn === true) {
            deleteOrca();
        }
        showShark.addToParent("scene");
        playShark.addToParent("scene");
        var $playSharkImage = $("#playShark").find("a-image");
        $playSharkImage.trigger("click");
        isSharkOn = true;
    }
};
