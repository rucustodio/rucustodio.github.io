var rlc = (function($) {

    var body,
        portfolio;
        twitterFetcher = twitterFetcher || false;

    
    portfolio = function(c) { // c: container for portfolio

    };

    twitter = function(c) {
        var config = {
          id : '717437002816204800',
          domId : 'twitter',
          maxTweets : 5,
          enableLinks : true,
          showUser : true,
          showTime : true,
          dateFunction : '',
          showRetweet : false,
          customCallback : handleTweets,
          showInteraction : false,
          dataOnly : true
        };

        
        function handleTweets(tweets) {
            var _tweets = tweets;

            console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                $('<li />', {
                    html: tweets[i].tweet + ' - ' + tweets[i].time
                }).appendTo('.tweets');
            }
        }

        if (twitterFetcher) {
            twitterFetcher.fetch(config);
        }
    };

    function init() {
        // portfolio.init();
        twitter();
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