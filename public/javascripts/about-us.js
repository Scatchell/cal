$(document).ready(function () {
    $('ul.tabs').on('tab_change', function (event, selectedTabLink) {
        var selectedTab = $(selectedTabLink).parent();
        if (selectedTab.hasClass('scroll-spy-enabled')) {
            initializeScrollSpy();
        }
    });
});