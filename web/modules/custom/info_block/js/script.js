(function ($) {


function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


include("/modules/custom/info_block/js/custom.js?" + Math.random());


})(jQuery);


