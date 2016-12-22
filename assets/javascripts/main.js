$(document).ready(function() {

    var moveImages = function () {
      var imgWidth = $(".layer:last img").width();
      var difference = window.innerWidth - imgWidth;
      var halfDifference = difference / 2;

      $(".layer img").css("left", halfDifference + "px" );
    };

    moveImages();

    $(window).on("resize", moveImages);


    // COMMENTED THIS METHOD OUT TO FIX JITTERY SCROLL. MAY NEED IT THOUGH
    $(window).stellar({
        horizontalScrolling: false
    });


    // Parallax Scroll
    $("html").niceScroll({
        cursorcolor: "rgba(30,30,30,.5)",
        zindex: 999,
        scrollspeed: 100,
        mousescrollstep: 50,
        cursorborder: "0px solid #fff",
    });

    // Progress Bar
    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function() {
        value = $(window).scrollTop();
        progressBar.attr('value', value);
    });

    // Links to virtual worlds
    $(".dropBut").on("click", function(){
        if (window.location.host === "localhost") {
            window.location.href = '/ocean.html';
        } else {
            window.location.href = '/animal-aid/ocean.html';
        }
    });

    $(".treeBut").on("click", function(){
        if (window.location.hostname === "localhost") {
            window.location.href = '/jungle.html';
        } else {
            window.location.href = '/animal-aid/jungle.html';
        }
    });

    // Back-To-Top Button

    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});



var win = "1000000$";
var message = "can i please cash in my " + (win="undefined");

console.log(message);
