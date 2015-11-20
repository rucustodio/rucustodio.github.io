var rlc = (function($) {

    var body,
        portfolio;

    
    portfolio = function(c) { // c: container for portfolio

    };

    function init() {
        // portfolio.init();
        addEventListenters();
    }

    function addEventListenters() {
        $('.fa-arrow-down').on('click', function(e) {
            scrollTo('.work-container');
        });

        $(window).on('scroll', scrollFunc);
    }

    function easterEggs() {
        console.log('yo!');
    }

    ////////////////////////////////////////////////////////////

    function scrollFunc(div) {

    }

    function scrollTo(div) {
        var divScrollTop = $(div).position().top;

        $('html, body').animate({
            scrollTop: divScrollTop
        });
    }

    init();

    return {
        easterEggs: easterEggs
    };
    
})(jQuery);