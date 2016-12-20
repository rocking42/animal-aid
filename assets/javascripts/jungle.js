$(document).ready(function() {
    // $("a-box").on("click", function() {
    //     getMovieName($(this).attr("id"));
    // });
    // $("a-cylinder").on("click", function() {
    //     getMovieName($(this).attr("id"));
    // });
    // $("#box").on("click", function() {
    //     $("#box").attr("textwrap").text = "bye";
    //     console.log(getMovieName($(this).attr("id")));
    // });

    $(window).on("keypress", function(e) {
        console.log(e);
    });

    var avideo = document.querySelector("a-video");
    // avideo.removeFromParent();
    var video = document.querySelector("video");
    video.pause();


    //
    var scene = document.querySelector("a-scene");
    $("#rhinoBox").on("click", function() {
        video.addToParent(scene);
    });

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            avideo.removeFromParent();
            clearInterval(myInterval);
        }
    }, 1000);
});
