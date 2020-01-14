$(function () {

    let Url = 'https://got-quotes.herokuapp.com/quotes';

    $.get(Url, function (data) {
        quoteAdder(data);
    });

    $(".new-quote").on('click', function (e) {
        e.preventDefault();

        $.get(Url, function (data) {
            quoteAdder(data);
        });
    });

    //
});

function quoteAdder(data) {
    $(".quote").html(data.quote);
    
}