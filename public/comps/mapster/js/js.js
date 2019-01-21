$(function(){

    if (/Edge\/\d./i.test(navigator.userAgent)){
        $('html').addClass('ms_edge')
    }

    $('main').append('<div class="transparent"></div><div class="transparent"></div><div class="shadow"></div>');
    $('<div class="bg"></div>').prependTo('body');

    var textInput = $('input');
    var oPlaceholder = textInput.attr('placeHolder');
    textInput.focus(function() {
        textInput.attr({placeHolder:""});
    }).blur(function() {
        textInput.attr({placeHolder: oPlaceholder});
    });

    $('.chat-mark + ul li').click(function() {
        $('.chat-mark + ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('button.chat-search').click(function() {
        $(this).toggleClass('chat-search chat-mark');
        $('nav').toggleClass('direction');
    });
    $('.chat-arrow-back').click(function() {
        $('button.chat-search').toggleClass('chat-search chat-mark');
        $('nav').toggleClass('direction');
    });

    for (var i = 0; i < 5; i++) {
        $('.rate').append('<i class="chat-star"></i>')
    }
    $('select').selectric();
});
