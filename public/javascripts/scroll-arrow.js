$(document).ready(function () {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 200) {
            $('#scroll-down').hide();
        }
    });
});