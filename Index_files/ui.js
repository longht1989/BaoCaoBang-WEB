$(document).ready(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
        $('.scrollleftads').css({ 'display': 'none' });
        $('.scrollrightads').css({ 'display': 'none' });
    }
});
// Shorthand for $( document ).ready()
$(function() {
    var marqueeHeight = $('.zone-weather .summary').height();
    if (marqueeHeight >= 100) {
        $(".zone-weather .summary p").wrapAll("<marquee class='marquee' behavior= 'scroll' direction= 'up' scrollamount= '2' />");
        // $('.marquee').attr({
        //     behavior: scroll,
        //     direction: up,
        //     scrollamount: 2
        // });
    };
});