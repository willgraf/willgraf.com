

// small screen nav button working
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
    $("section").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});


// navbar scrolls to the section
$(document).ready(function () {
    // navigation click actions
    $('.scroll-link').on('click', function (event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 666);
    });
    // scroll to top action
    $('.scroll-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});

// scroll function
function scrollToID(id, speed) {
    var offSet = 5;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#navbar');
    $('html,body').animate({scrollTop: targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function () { }
    };
}

// skills chart
$(document).ready(function() {
  $('.java').css('width', '90%');
  $('.html').css('width', '85%');
  $('.python').css('width', '90%');
  $('.r').css('width', '75%');
  $('.sql').css('width', '70%');
  $('.javascript').css('width', '60%');
  $('.wordpress').css('width', '75%');
});

