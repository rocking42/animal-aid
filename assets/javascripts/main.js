// JSON

var locURL = "https://animal-data.herokuapp.com/animals.json";

// MODAL INFO

function modalDisplay(res) {
    var template = $("#modal1").html();
    var result = _.template(template);
    result = result({
        name: res.name,
        description: res.description,
        vidURL: res.vidURL
    });
    $(".detailModal").html(result);

}

// MODAL VIDEO

function modalVidDisplay(res) {
    var template = $("#modal2").html();
    var result = _.template(template);
    result = result({
        vidURL: res.vidURL
    });
    $(".detailModal").html(result);
}

// DISPLAY MODAL INFO

function displayAnimal(data, b, c, query) {
    var res = data.find(function(animal) {
        return animal.name === query;
    });
    modalDisplay(res);
    var span = document.getElementsByClassName("close")[0];
    var modal = document.querySelector('#myModalText');
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    span.onclick = function() {
        modal.style.display = "none";
    };
}

// DISPLAY MODAL VIDEO

function displayAnimalVid(data, b, c, query) {
    var res = data.find(function(animal) {
        return animal.name === query;
    });
    modalVidDisplay(res);
    var modal = document.querySelector('#myModalVid');
    var movie = document.querySelector(".animalMovie");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            movie.parentNode.removeChild(movie);
            modal.style.display = "none";
        }
    };
}

// MODAL AJAX REQUEST

var dataFun;
var findAnimal = function(query, dataCont) {
    dataFun = dataCont;
    $.ajax({
            url: locURL,
            type: "GET",
            crossDomain: true,
            dataType: "JSON"
        })
        .done(function(a, b, c) {
            if (dataFun === "text") {
                displayAnimal(a, b, c, query);
            } else {
                displayAnimalVid(a, b, c, query);
            }
        })
        .fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
        });
};

$(document).ready(function() {

    // CENTRE PARALLAX IMAGE

    var centreImages = function() {
        var imgWidth = $(".layer:last img").width();
        var difference = window.innerWidth - imgWidth;
        var halfDifference = difference / 2;

        $(".layer img").css("left", halfDifference + "px");
    };

    centreImages();

    $(window).on("resize", centreImages);

    // MOVING SUN

    // var movingSun = function() {
    //     $(".sun").css({
    //         position: "absolute",
    //         top: 0,
    //         left: 0
    //     });
    //
    //     var animateSun = function() {
    //         $(".sun").animate({
    //             top: "400px"
    //         }, 10000, function() {
    //             $(".sun").animate({
    //                 top: "0"
    //             }, 10000, function() {
    //                 animateSun();
    //             });
    //         });
    //     };
    //
    //     animateSun();
    // };
    //
    // movingSun();

    // MOVING MOON

    // var movingMoon = function() {
    //     $(".moon").css({
    //         position: "absolute",
    //         top: 400,
    //         left: 0
    //     });
    //
    //     var animateMoon = function() {
    //         $(".moon").animate({
    //             top: "0"
    //         }, 10000, function() {
    //             $(".moon").animate({
    //                 top: "400px"
    //             }, 10000, function() {
    //                 animateMoon();
    //             });
    //         });
    //     };
    //
    //     animateMoon();
    // };
    //
    // movingMoon();


    // STELLAR SCROLL

    $(window).stellar({
        horizontalScrolling: false
    });


    // PARALLAX SCROLL

    $("html").niceScroll({
        cursorcolor: "rgba(30,30,30,.5)",
        zindex: 999,
        scrollspeed: 100,
        mousescrollstep: 50,
        cursorborder: "0px solid #fff",
    });

    // PROGRESS BAR
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

    // BUTTONS

    $(".infoBut").on("click", function() {
        var change = this.getAttribute("data-type");
        change = change.replace("-", " ");
        findAnimal(change, "text");
    });

    $(".vidBut").on("click", function() {
        var change = this.getAttribute("data-type");
        change = change.replace("-", " ");
        findAnimal(change, "video");
    });

    // Links to virtual worlds
    $(".dropBut").on("click", function() {
        if (window.location.host === "localhost") {
            window.location.href = '/ocean.html';
        } else {
            window.location.href = '/animal-aid/ocean.html';
        }
    });

    $(".treeBut").on("click", function() {
        if (window.location.hostname === "localhost") {
            window.location.href = '/jungle.html';
        } else {
            window.location.href = '/animal-aid/jungle.html';
        }
    });


    $(".scrollIndex").on("click", function(e) {
        e.preventDefault();
        var $window = $(window);
        var scroll = parseInt($window.scrollTop() / $window.height());
        if (e.target.classList.contains("downBut")) {
            scroll = scroll + 1;
        } else if (scroll % 1 === 0) {
            scroll = scroll - 1;
        }
        $('html,body').animate({
            scrollTop: scroll * $window.height()
        }, 800);
    });


    // BACK-TO-TOP-BUTTON

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

// RANDOM CONSOLE LOG MESSAGE

var win = "1000000$";
var message = "can i please cash in my " + (win = "undefined");

console.log(message);
