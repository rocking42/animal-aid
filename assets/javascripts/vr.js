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

var checkRoot = function(root) {
  if (root == "localhost") {
    return "/";
  } else {
    return '/animal-aid/';
  }
};

var redirectHome = function(){
  window.location.href = checkRoot(location.hostname) + 'index.html';
};

var goJungling = function(){
  window.location.href = checkRoot(location.hostname) + 'jungle.html';
};

var redirectOcean = function(){
  window.location.href = checkRoot(location.hostname) + 'ocean.html';
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
                vid = document.querySelector("video");
                vid.play();
                animal["show"].addToParent("scene");
                animal["play"].addToParent("scene");
                var $playVideo = $("#play"+animal["name"]).find("a-image");
                $playVideo.trigger("click");
                animal["isOn"] = true;
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

    $(".ocean").on("click", function() {
        exitEffect();
        var goingSwimming = window.setTimeout(redirectOcean, 5000);
    });

    var exitEffect = function () {
      var floor = document.querySelector(".floor");
      floor.attributes[5].value="0 5 0";
      window.setTimeout(function() {
        userCam.removeAttribute("universal-controls");
        userCam.setAttribute('rotation', "73 -33 0");
      }, 1000);
    };

    // after saving them into variable sand loading the assets, delete the nodes off of the scene
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            var ground = document.querySelector(".ground");
            if (ground) {
                ground.pause();
            }
            for (var key in animals) {
                removeAnimal(animals[key]);
            }
            clearInterval(myInterval);
        }
    }, 500);
});
