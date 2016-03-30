var rlc = (function($) {

    var body,
        portfolio;

    
    portfolio = function(c) { // c: container for portfolio

    };

    function init() {
        // portfolio.init();
        addEventListenters();
        $('#work_1').addClass('animate');
    }

    function addEventListenters() {
        $('.scroll-to-work').on('click', function(e) {
            scrollTo('.work-container');
        });

        $('.logo').click(function() {
            window.location = '';
        });

        $(window).on('scroll', scrollFunc);
    }

    function easterEggs() {
        console.log('yo!');
    }

    ////////////////////////////////////////////////////////////

    function scrollFunc() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 300) {
            $('.work').first().addClass('active');
        }
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