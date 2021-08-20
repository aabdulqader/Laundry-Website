

$(document).ready(function () {
    $('.testimonial').owlCarousel({
        loop: true,
//        margin: 60,
        dots: false,
        nav: true,
        navText: ["<img src='assets/img/chevron-left.png' alt=''>", "<img src='assets/img/chevron-right.png' alt=''>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



// Test Less More
    // Configure/customize these variables.
    var showChar = 150; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";

    $(".more").each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html =
                    c +
                    '<span class="moreellipses">' +
                    ellipsestext +
                    '&nbsp;</span><span class="morecontent"><span>' +
                    h +
                    '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
                    moretext +
                    "</a></span>";

            $(this).html(html);
        }
    });

    $(".morelink").on('click', function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this)
                .parent()
                .prev()
                .toggle();
        $(this)
                .prev()
                .toggle();
        return false;
    });






});

