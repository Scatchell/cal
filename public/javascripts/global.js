/**
 *
 * Created by anthonyscatchell on 12/28/15.
 */
function initializeScrollSpy(scrollSpyContext) {
    var context = scrollSpyContext ? $(scrollSpyContext) : $('body');

    var $rightNavWrapper = context.find('.right-nav-wrapper');
    $rightNavWrapper.pushpin(
        {
            top: context.find('.right-nav').offset().top,
            bottom: $('footer').offset().top - $rightNavWrapper.height(),
            offset: 15
        }
    );

    $('.scroll-spy').scrollSpy();
}

$(document).ready(function () {
    $('.parallax').parallax();

    $('.slider').slider(
        {
            full_width: true,
            height: 600
        }
    );

    $('.modal-trigger').leanModal();

    var options = {
        valueNames: ['question', 'answer'],
        plugins: [
            ListFuzzySearch()
        ]
    };

    new List('faq-list', options);

    $(".dropdown-button").dropdown({
        belowOrigin: true,
        hover: true
    });

    $('ul.tabs').tabs();

    $('.slider').slider('pause');

    $(".cal-videos").each(function (index, calVideo) {
        $(calVideo).bind("ended", function () {
            $('.slider').slider('next');
        });
    });
});
