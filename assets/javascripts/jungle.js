$(document).ready(function() {

    var avideo = document.querySelector("a-video");
    var scene = document.querySelector("a-scene");

    var myInterval = window.setInterval(function() {
        if (scene.hasLoaded) {
            console.log("happy");
            var ocean = document.querySelector("a-ocean");
            ocean.pause();
            avideo.removeFromParent();
            var vidId = $("#vidId");
            var childVid = vidId.children()[0];
            $(childVid).on("click", function() {
                if (this.attributes.src.value === "https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png") {
                    console.log("play");
                    avideo.addToParent(scene);
                } else {
                    console.log("pause");
                    avideo.removeFromParent();
                }

                // vidId.addToParent(scene);
            });
            clearInterval(myInterval);
        }
    }, 1000);



    // avideo.removeFromParent();
    var video = document.querySelector("video");
    video.pause();


    //



    // $("#vidId").on("dblclick", function() {
    //     avideo.removeFromParent();
    //     // vidId.removeFromParent();
    // });

    // $("#penguin-sledding").on("click", function() {
    //     console.log("clicked");
    // });


});
