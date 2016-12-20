$(document).ready(function() {
    $("a-box").on("click", function() {
        getMovieName($(this).attr("id"));
    });
    $("a-cylinder").on("click", function() {
        getMovieName($(this).attr("id"));
    });
    $("#box").on("click", function() {
        $("#box").attr("textwrap").text = "bye";
        console.log(getMovieName($(this).attr("id")));
    });

    var video = document.querySelector("video");
    video.pause();

});
