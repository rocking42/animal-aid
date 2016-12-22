var animals = {};

var initialize = function () {
  var initialize = document.querySelectorAll(".play");
  for (var i = 0 ; i < initialize.length ; i += 1) {
      var animal = initialize[i].classList[2];
      animals[i] = {
        name: animal,
        show: document.querySelector("#show" + animal),
        play: document.querySelector("#play" + animal),
        isOn: true
      };
  }
};
// Iterates through all videos and pause them (cant override autoplay)
var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var redirectHome = function(){
  if (location.hostname === "localhost") {
    window.location.href = '/index.html';
  } else {
    window.location.href = '/animal-aid/index.html';
  }
};

var goJungling = function(){
    if (location.hostname === "localhost") {
    window.location.href = '/jungle.html';
  } else {
    window.location.href = '/animal-aid/jungle.html';
  }
};

var redirectOcean = function(){
  if (location.hostname === "localhost") {
    window.location.href = '/ocean.html';
  } else {
    window.location.href = '/animal-aid/ocean.html';
  }
};

$(document).ready(function() {
    initialize();
    freezeVideos();

    // once the scene has loaded find all videos, controllers and scene and save them into variables
    var scene = document.querySelector("a-scene");
    var userCam = document.querySelector("#userCam");

    var removeAnimal = function(animal) {
            animal["show"].removeFromParent();
            animal["play"].removeFromParent();
            animal["isOn"] = false;
    };

    var playEvent = function (event) {
        freezeVideos();
        for (var key in animals) {
            var animal = animals[key];
            if (event.target.classList.contains(animal.name) && animal.isOn === false) {
                animal["show"].addToParent("scene");
                animal["play"].addToParent("scene");
                var $playVideo = $("#"+animal.name).find("a-image");
                $playVideo.trigger("click");
                animal.isOn = true;
            } else if (animal.isOn ){
                removeAnimal(animal);
            }
        }
    };

    $(".play").on("click", playEvent );

    //  EVENT LISTENERS FOR PLATFORMS
        // If selected video is playing and clicked again, shut it down
            // OTHERWISE get rid of the rest of the videos on scene and launch the current video
    $(".goHome").on("click", function() {
        exitEffect();
        var goingHome = window.setTimeout(redirectHome, 5000);
    });

    $(".goJungling").on("click", function() {
        exitEffect();
        var goingJungling = window.setTimeout(goJungling, 5000);
    });

    var exitEffect = function () {
      var floor = document.querySelector(".floor");
      floor.attributes[5].value="0 5 0";
      window.setTimeout(function() {
        cam.removeAttribute("universal-controls");
        cam.setAttribute('rotation', "73 -33 0");
      }, 1000);
    };

    // after saving them into variable sand loading the assets, delete the nodes off of the scene
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            for (var key in animals) {
                removeAnimal(animals[key]);
            }
            clearInterval(myInterval);
        }
    }, 500);
});
