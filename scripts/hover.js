$(document).ready(function() {
    $('img').hover(function(){
        $(this).data('origsrc', $(this).attr('src'));
        if ($(this).attr('src') == "images/pikachu.jpeg") {
            $(this).attr('src', 'images/raichu.jpeg');
        }
        else if ($(this).attr('src') == "images/charmander.png") {
            $(this).attr('src', 'images/charizard.png');
        }
        else if ($(this).attr('src') == "images/squirtle.png") {
            $(this).attr('src', 'images/blastoise.png');
        }
        else {
            $(this).attr('src', 'images/venusaur.jpg');
        }
    }, function() {
        $(this).attr('src', $(this).data('origsrc'));
    });
})