(function($) {

    "use strict";

    // PRE loader
    $(window).load(function() {
        $('.preloader').fadeOut(1000); // set duration in brackets
    });


    // Parallax Js
    function initParallax() {
        $('#home').parallax("50%", 0.3);
        $('#about').parallax("50%", 0.3);
        $('#work').parallax("50%", 0.3);
        $('#response').parallax("50%", 0.3);
        $('#contact').parallax("50%", 0.3);
        $('#footer').parallax("50%", 0.3);
    }
    initParallax();


    // WOW Animation js
    new WOW({ mobile: false }).init();

})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    const player = new Plyr('#player');

    // Expose
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }

    // Play
    on('.js-play', 'click', () => {
        player.play();
    });

    // Pause
    on('.js-pause', 'click', () => {
        player.pause();
    });

    // Stop
    on('.js-stop', 'click', () => {
        player.stop();
    });

    // Rewind
    on('.js-rewind', 'click', () => {
        player.rewind();
    });

    // Forward
    on('.js-forward', 'click', () => {
        player.forward();
    });
});