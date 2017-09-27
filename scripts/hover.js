$(document).ready(function() {
    $('img').hover(function(){
        var temp = $(this).attr('src');
        $(this).attr('src', $(this).data('alt-src'));
        $(this).data('alt-src', temp);
    }, function() {
        var temp = $(this).attr('src');
        $(this).attr('src', $(this).data('alt-src'));
        $(this).data('alt-src', temp);
    });
})