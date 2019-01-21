$(function(){


    $(window).mousemove(function (e) {
        var x = e.offsetX / $(this).width();
        var y = e.offsetY / $(this).height();
        //console.log(x*10+' / '+y*10);
        function translate(sel,num) {
            sel.css({
                transform: 'translate('+x*num+'px,'+y*num+'px)'
            });
        }
        translate($('img:nth-of-type(1)'),60);
        translate($('img:nth-of-type(2)'),50);
        //translate($('h1'),35);
        translate($('img:nth-of-type(3)'),25);
        //translate($('h2:nth-of-type(1)'),15);
        //translate($('h2:nth-of-type(2)'),12);
        translate($('img:nth-of-type(4)'),10);
        translate($('img:nth-of-type(5)'),-6);
        translate($('img:nth-of-type(6)'),-10);

    });

    if ($(window).height() < 900) {
        $('body').addClass('u_900')
    }
    $(window).resize(function (){
        if ($(window).height() < 900) {
            $('body').addClass('u_900')
        } else {
            $('body').removeClass('u_900')
        }
    });


});
