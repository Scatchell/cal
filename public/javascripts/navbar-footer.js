$(document).ready(function () {
    $(".about-us-locations").click(function () {
        $('ul.tabs').tabs('select_tab', 'locations');
    });
    $(".about-us-philosophy").click(function () {
        $('ul.tabs').tabs('select_tab', 'philosophy');
    });
    $(".about-us-model").click(function () {
        $('ul.tabs').tabs('select_tab', 'model');
    });
    $(".about-us-curriculum").click(function () {
        $('ul.tabs').tabs('select_tab', 'curriculum');
    });
});