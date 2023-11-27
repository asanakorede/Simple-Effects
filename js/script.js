$(document).ready(function () {
    $(".clickable").click(function () {
        $("#walrus-showing").slideToggle();
        $("#walrus-hidden").slideToggle();
    });
})