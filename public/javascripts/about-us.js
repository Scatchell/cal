var initializeIfScrollSpyEnabled = function (selectedTabLink) {
    var selectedTab = selectedTabLink.parent();
    if (selectedTab.hasClass('scroll-spy-enabled')) {
        initializeScrollSpy(selectedTabLink.attr('href'));
    }
};

$(document).ready(function () {
    //pre initialize scroll spy in case user loaded page directly on a tab that needs it
    var $currentlyActiveTab = $('li.tab .active');
    initializeIfScrollSpyEnabled($currentlyActiveTab);

    //attach scroll spy initialization to each other tab that needs to reinitialize
    $('ul.tabs').on('tab_change', function (event, selectedTabLink) {
        initializeIfScrollSpyEnabled($(selectedTabLink));
    });
});