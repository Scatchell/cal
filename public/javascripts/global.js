/**
 *
 * Created by anthonyscatchell on 12/28/15.
 */

$(document).ready(function () {
    $('.parallax').parallax();

    $('.slider').slider(
        {
            full_width: true,
            height: 600
        }
    );

    var $rightNavWrapper = $('.right-nav-wrapper');
    if ($rightNavWrapper.length > 0) {
        $rightNavWrapper.pushpin(
            {
                top: $('.right-nav').offset().top,
                bottom: $('footer').offset().top - $rightNavWrapper.height(),
                offset: 15
            }
        );

        $('.scroll-spy').scrollSpy();
    }

    $('.modal-trigger').leanModal();

    var options = {
        valueNames: [ 'question', 'answer' ],
        plugins: [
            ListFuzzySearch()
        ]
    };

    new List('faq-list', options);

    $(".dropdown-button").dropdown();
});
