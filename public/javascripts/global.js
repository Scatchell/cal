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

    $('.right-nav-wrapper').pushpin(
        {
            top: $('.right-nav').offset().top,
            bottom: $('footer').offset().top - $('.right-nav-wrapper').height(),
            offset: 15
        }
    );

    $('.scroll-spy').scrollSpy();
});

