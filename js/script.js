$(document).ready(function(){
    // Smooth scrolling animation for navbar.
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 550, 'swing', function () {
            window.location.hash = target;
        });
    });

    var date = new Date();
    var copyright = document.getElementById("copyright");
    copyright.innerHTML = "© " + date.getFullYear() + " Celia Stokman";
});