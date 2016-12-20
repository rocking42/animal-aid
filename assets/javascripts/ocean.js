$(document).ready(function() {

    var video = document.querySelector("video");
    video.pause();

    var showVideo = document.querySelector("a-video");
    showVideo.removeFromParent();

    // document.querySelector('.dolphin').addEventListener('click', function () {
    //   this.setAttribute('material', 'color', 'red');
    //
    //   console.log('I was clicked!');
    // });

    $(".dolphin").on("click", function () {
        this.setAttribute('material', 'color', 'red');
    });

    $(".penguin").on("click", function () {
        var scene = document.querySelector("a-scene");
        video.addToParent(scene);
    });


});
