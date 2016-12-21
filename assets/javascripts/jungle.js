var triggerData = "";
var isRhinoOn = true;
var isGorillaOn = true;
var isPandaOn = true;
var isElephantOn = true;

var redirectHome = function(){
  if (location.hostname === "localhost") {
    window.location.href = '/index.html';
  } else {
    window.location.href = '/animal-aid/index.html';
  }
};

var redirectOcean = function(){
  if (location.hostname === "localhost") {
    window.location.href = '/ocean.html';
  } else {
    window.location.href = '/animal-aid/ocean.html';
  }
};

var freezeVideos = function(){
    var videos = document.querySelectorAll("video");
    for (var i = 0 ; i < videos.length ; i += 1) {
        videos[i].pause();
    }
};

var deleteRhino = function () {
    showRhino.removeFromParent();
    playRhino.removeFromParent();
    isRhinoOn = false;
};

var deleteGorilla = function() {
    showGorilla.removeFromParent();
    playGorilla.removeFromParent();
    isGorillaOn = false;
};

var deletePanda = function() {
    showPanda.removeFromParent();
    playPanda.removeFromParent();
    isPandaOn = false;
};

var deleteElephant = function() {
    showElephant.removeFromParent();
    playElephant.removeFromParent();
    isElephantOn = false;
};

$(document).ready(function() {

    freezeVideos();

    var scene = document.querySelector("a-scene");
    var showRhino = document.querySelector("#showRhino");
    var playRhino = document.querySelector("#playRhino");
    var showGorilla = document.querySelector("#showGorilla");
    var playGorilla = document.querySelector("#playGorilla");
    var showPanda = document.querySelector("#showPanda");
    var playPanda = document.querySelector("#playPanda");
    var showElephant = document.querySelector("#showElephant");
    var playElephant = document.querySelector("#playElephant");
    var cam = document.querySelector("#player");

    $(".rhino").on("click", playRhinoEvent );
    $(".gorilla").on("click", playGorillaEvent );
    $(".panda").on("click", playPandaEvent );
    $(".elephant").on("click", playElephantEvent );

    $(".home").on("click", function() {
        var floor = document.querySelector(".floor");
        floor.attributes[5].value="0 5 0";
        window.setTimeout(function() {
          cam.removeAttribute("universal-controls");
          cam.setAttribute('rotation', "73 -33 0");
        }, 1000);
        var goingHome = window.setTimeout(redirectHome, 4000);
    });

    $(".ocean").on("click", function() {
        var floor = document.querySelector(".floor");
        floor.attributes[5].value="0 5 0";
        window.setTimeout(function() {
          cam.removeAttribute("universal-controls");
          cam.setAttribute('rotation', "73 -33 0");
        }, 1000);
        var goingHome = window.setTimeout(redirectOcean, 4000);
    });



    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            deleteRhino();
            deleteGorilla();
            deletePanda();
            deleteElephant();
            clearInterval(myInterval);
        }
    }, 500);

    $("#oceanWorld").on("click", function() {
      console.log("clicked");
      window.location.href = "/ocean.html";
    });
});

var playRhinoEvent = function (event) {
    freezeVideos();
    if (isRhinoOn === true) {
        deleteRhino();
    } else {
        if (isGorillaOn === true) {
            deleteGorilla();
        }
        if (isPandaOn === true) {
            deletePanda();
        }
        if (isElephantOn === true) {
          deleteElephant();
        }
        showRhino.addToParent("scene");
        playRhino.addToParent("scene");
        var $playRhinoImage = $("#playRhino").find("a-image");
        $playRhinoImage.trigger("click");
        isRhinoOn = true;
    }
};

var playGorillaEvent = function (event) {
    freezeVideos();
    if (isGorillaOn === true) {
        deleteGorilla();
    } else {
        if (isRhinoOn === true) {
            deleteRhino();
        }
        if (isPandaOn === true) {
            deletePanda();
        }
        if (isElephantOn === true) {
          deleteElephant();
        }
        showGorilla.addToParent("scene");
        playGorilla.addToParent("scene");
        var $playGorillaImage = $("#playGorilla").find("a-image");
        $playGorillaImage.trigger("click");
        isGorillaOn = true;
    }
};

var playPandaEvent = function (event) {
    freezeVideos();
    if (isPandaOn === true) {
        deletePanda();
    } else {
        if (isRhinoOn === true) {
            deleteRhino();
        }
        if (isGorillaOn === true) {
            deleteGorilla();
        }
        if (isElephantOn === true) {
          deleteElephant();
        }
        showPanda.addToParent("scene");
        playPanda.addToParent("scene");
        var $playPandaImage = $("#playPanda").find("a-image");
        $playPandaImage.trigger("click");
        isPandaOn = true;
    }
};

var playElephantEvent = function (event) {
    freezeVideos();
    if (isElephantOn === true) {
        deleteElephant();
    } else {
        if (isRhinoOn === true) {
            deleteRhino();
        }
        if (isGorillaOn === true) {
            deleteGorilla();
        }
        if (isPandaOn === true) {
          deletePanda();
        }
        showElephant.addToParent("scene");
        playElephant.addToParent("scene");
        var $playElephantImage = $("#playElephant").find("a-image");
        $playElephantImage.trigger("click");
        isElephantOn = true;
    }
};
