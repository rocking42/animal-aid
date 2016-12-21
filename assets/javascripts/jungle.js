var triggerData = "";
var isRhinoOn = true;
var isGorillaOn = true;

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

$(document).ready(function() {

    freezeVideos();

    var scene = document.querySelector("a-scene");
    var showRhino = document.querySelector("#showRhino");
    var playRhino = document.querySelector("#playRhino");
    var showGorilla = document.querySelector("#showGorilla");
    var playGorilla = document.querySelector("#playGorilla");

    $(".rhino").on("click", playRhinoEvent );

    $(".gorilla").on("click", playGorillaEvent );

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            var ocean = document.querySelector("a-ocean");
             ocean.pause();
            deleteRhino();
            deleteGorilla();
            clearInterval(myInterval);
        }
    }, 500);
});

var playRhinoEvent = function (event) {
    freezeVideos();
    if (isRhinoOn === true) {
        deleteRhino();
    } else {
        if (isGorillaOn === true) {
            deleteGorilla();
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
        showGorilla.addToParent("scene");
        playGorilla.addToParent("scene");
        var $playGorillaImage = $("#playGorilla").find("a-image");
        $playGorillaImage.trigger("click");
        isGorillaOn = true;
    }
};

// var trigger = false;
// var triggerData = "";
//
// var freezeVideos = function(){
//     var videos = document.querySelectorAll("video");
//     for (var i = 0 ; i < videos.length ; i += 1) {
//         videos[i].pause();
//     }
// };
//
// var deleteVideos = function() {
//     if (document.querySelector("#showRhino")) {
//         showPenguin.removeFromParent();
//     }
//     if (document.querySelector("#playRhino")) {
//         playPenguin.removeFromParent();
//     }
//     if (document.querySelector("#showGorilla")) {
//         playDolphin.removeFromParent();
//     }
//     if (document.querySelector("#playGorilla")) {
//         showDolphin.removeFromParent();
//     }
// };
//
//
// $(document).ready(function() {
//
//     var avideo = $("a-video");
//     var video = $("video");
//     var controls = $(".controls");
//     var scene = document.querySelector("a-scene");
//     var showRhino = document.querySelector("#showRhino");
//     var playRhino = document.querySelector("#playRhino");
//     var showGorilla = document.querySelector("#showGorilla");
//     var playGorilla = document.querySelector("#playGorilla");
//
//     function playVid() {
//         if (this.attributes.src.value === "https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png") {
//             console.log("play");
//             avideo.addToParent(scene);
//         } else {
//             console.log("pause");
//             avideo.removeFromParent();
//         }
//     }
//
//     // console.log("happy");
//     // var ocean = document.querySelector("a-ocean");
//     // ocean.pause();
//     // $.each(avideo, function() {
//     //     this.removeFromParent();
//     // });
//     // var rhinoControl = $("#rhinoControl");
//     // var childVid = rhinoControl.children()[0];
//     // $(childVid).on("click", playVid);
//     //
//
//     $("#rhinoCyl").on("click", playRhinoEvent);
//
//     var myInterval = window.setInterval(function() {
//         if (scene.hasLoaded) {
//
//           $.each(video, function() {
//               this.pause();
//           });
//           $.each(avideo, function() {
//               this.removeFromParent();
//           });
//           $.each(controls, function() {
//             this.removeFromParent();
//           });
//           clearInterval(myInterval);
//         }
//     }, 1000);
//
//     function playRhinoEvent(event) {
//         freezeVideos();
//         if (trigger === false || triggerData != "rhino") {
//             showRhino.addToParent("scene");
//             playRhino.addToParent("scene");
//             var $playRhinoImage = $("#playRhino").find("a-image");
//             $playRhinoImage.trigger("click");
//             trigger = true;
//             triggerData = event.target.attributes[0].value;
//         } else {
//             showRhino.removeFromParent();
//             playRhino.removeFromParent();
//             trigger = false;
//         }
//     };
//
//     // avideo.removeFromParent();
// });
