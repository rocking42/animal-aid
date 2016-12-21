$(document).ready(function() {

    var avideo = $("a-video");
    var scene = document.querySelector("a-scene");
    function playVid() {
        if (this.attributes.src.value === "https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png") {
            console.log("play");
            debugger
            avideo.addToParent(scene);
        } else {
            console.log("pause");
            avideo.removeFromParent();
        }
    }

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            $.each(avideo, function() {
                this.removeFromParent();
            });
            var rhinoControl = $("#rhinoControl");
            var childVid = rhinoControl.children()[0];
            $(childVid).on("click", playVid);
            clearInterval(myInterval);
        }
    }, 1000);

    // avideo.removeFromParent();
    var video = document.querySelector("video");
    video.pause();
});
