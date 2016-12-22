// on load, create the animals Obj containing all the videos and controls in the page for each animal
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

// Iterates through all videos and pause them
var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

//  checks if the site is loaded on a localhost or off site and adjusts the page links
  // lines 28 - 46
var checkRoot = function(root) {
  if (root == "localhost") {
    return "/";
  } else {
    return '/animal-aid/';
  }
};
var redirect = function(event){
    window.location.href = checkRoot(location.hostname) + event.target.attributes[2].value + '.html';
};

// Document ready function
$(document).ready(function() {


    initialize(); // run initialize the animals Obj once page has finished loading
    freezeVideos(); // stops all video's autoplay
    var $scene = $("a-scene");
    var $svg = $("svg") // save the loading bar in a var
    var scene = document.querySelector("a-scene"); //save the scene into a var (for element appendings)
    var userCam = document.querySelector("#userCam"); // save the user camera view coords to adjust entrance and exit
    // Hide the scene until ready

    $scene.hide();
    // callback functions

    // when called on animals.animal, removes specified animal's video and controllers off the scene
    var removeAnimal = function(animal) {
            animal["show"].removeFromParent();
            animal["play"].removeFromParent();
            animal["isOn"] = false;
    };


    var playEvent = function (event) {
      // when an event is triggers:
        freezeVideos(); // freeze all playing videos
        for (var key in animals) { // iterate through the objects on the scene and:
            var animal = animals[key];
            if (event.target.classList.contains(animal.name) && animal.isOn === false) { // if the animal's cylinder is the one used to trigger, and it isnt already playing, turn it on
                animal["show"].addToParent("scene");
                animal["play"].addToParent("scene");
                var $playVideo = $("#play"+animal["name"]).find("a-image"); // find the controller's 'play' button and:
                $playVideo.trigger("click"); // trigger a click event on it
                animal["isOn"] = true;
            } else if (animal.isOn ){ // if it's another animal and not the triggering one, or the triggering animal is already turned on, turn it off.
                removeAnimal(animal);
            }
        }
    };

    // add event listener to all video linked cylinders (any animal with video in the VR)
    $(".play").on("click", playEvent );
    // add event listner to the redirect links ( home page / jungle link / ocean link )
    $(".redirect").on("click", function(e) {
      exitEffect();

      // var redirecting = window.setTimeout(redirect(event), 5000);
      var redirecting = window.setTimeout(redirect, 5000, e);
    });

    // exit effects to simulate free fall out of the world
    var exitEffect = function () {
      var floor = document.querySelector(".floor");
      floor.attributes[5].value="0 5 0"; // basically moves the floor a few increments higher to start the fall
      window.setTimeout(function() {
        userCam.removeAttribute("universal-controls"); // take the camera controll off of the user and:
        userCam.setAttribute('rotation', "73 -33 0"); // make it look up towards the sky
      }, 1000);
    };

    // after saving them into variable sand loading the assets, delete the nodes off of the scene
    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            $svg.hide();
            $scene.show();
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
