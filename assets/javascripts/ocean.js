// Iterates through all videos and pause them (cant override autoplay)
var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var redirectHome = function(){
    if (window.location.href === '/ocean.html') {
        window.location.href = '/index.html';
    } else {
        window.location.href = '/animal-aid/index.html';
    }
};

var goJungling = function(){
    if (window.location.href === '/ocean.html') {
        window.location.href = '/jungle.html';
    } else {
        window.location.href = '/animal-aid/jungle.html';
    }
};

$(document).ready(function() {

    freezeVideos();

    // once the scene has loaded find all videos, controllers and scene and save them into variables
    var scene = document.querySelector("a-scene");
    var userCam = document.querySelector("#userCam");

    var animals = {
        orca: {
            show: document.querySelector("#showOrca"),
            play: document.querySelector("#playOrca"),
            isOn: true,
            name: "playOrca"
        },
        dolphin: {
            show: document.querySelector("#showDolphin"),
            play: document.querySelector("#playDolphin"),
            isOn: true,
            name: "playDolphin"
        },
        penguin: {
            show: document.querySelector("#showPenguin"),
            play: document.querySelector("#playPenguin"),
            isOn: true,
            name: "playPenguin"
        },
        shark: {
            show: document.querySelector("#showShark"),
            play: document.querySelector("#playShark"),
            isOn: true,
            name: "playShark"
        }

    };

    var removeAnimal = function(animal) {
            animal["show"].removeFromParent();
            animal["play"].removeFromParent();
            animal["isOn"] = false;
    };

    var playEvent = function (event) {
        freezeVideos();
        console.log("going to playEvent");
        for (var key in animals) {
            console.log("entering the loop");
            var animal = animals[key];
            if (event.target.classList.contains(animal.name) && animal.isOn === false) {
                animal["show"].addToParent("scene");
                animal["play"].addToParent("scene");
                var $playVideo = $("#"+animal.name).find("a-image");
                console.log("Awdawd");
                console.log($playVideo);
                console.log("awdqeweqeqwdawd");
                $playVideo.trigger("click");
                animal.isOn = true;
            } else if (animal.isOn ){
                console.log("cant read condition!!!");
                removeAnimal(animal);
            }
        }
    };

    $(".playDolphin").on("click", playEvent );

    $(".playPenguin").on("click", playEvent );

    $(".playOrca").on("click", playEvent );

    $(".playShark").on("click", playEvent );

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
            for (var key in animals) {
                removeAnimal(animals[key]);
            }
            clearInterval(myInterval);
        }
    }, 500);

    //  EVENT LISTENERS FOR PLATFORMS
        // If selected video is playing and clicked again, shut it down
            // OTHERWISE get rid of the rest of the videos on scene and launch the current video
});
