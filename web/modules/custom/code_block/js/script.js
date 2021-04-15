(function ($) {


function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


include("/modules/custom/code_block/js/script4itemprop.js?" + Math.random());


})(jQuery);


