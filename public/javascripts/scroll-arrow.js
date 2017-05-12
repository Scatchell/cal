$(document).ready(function () {
    var cardContent = $('.container');
    if (isElementPartiallyVisible(cardContent)) {
        $('#scroll-down').hide();
    }

    $(window).scroll(function (event) {
        if (isElementPartiallyVisible(cardContent)) {
            $('#scroll-down').hide();
        }
    });
});

function isElementPartiallyVisible(el) {

    //handler for jquery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 60
    );
}