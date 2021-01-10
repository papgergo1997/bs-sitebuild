$(document).ready(function () {
    let scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 300)
    })
});

$('[data-toggle="tooltip"]').tooltip();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-link");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
