$(function(){

    var param = {
        cycle: 180,
        step : 5,
        YPos : $('.num').height()-20
    }
    //Temperature
    for (var i = 0; i < param.step; i++) {
        $('.dizaine').append('<li>'+i+'</li>')
    }
    for (var i = 0; i <= param.cycle/param.step; i++) {
        $('.unit').append('<li>'+i+'</li>')
    }





    //Moving gradation
    //Let's create 180 little lines
    var transY = 80;//Height of the little lines
    for (var i = 0; i < param.cycle; i++) {
        $('.grad').append('<em>');
        $('article').append('<i>');
        $('.grad em:nth-of-type('+(i+1)+')').css({ transform: 'rotate('+ i*2 +'deg) translate(0, '+ transY +'px)'});
        $('article i:nth-of-type('+(i+1)+')').css({ transform: 'rotate('+ i*2 +'deg) translate(0, 87px)'});
    }

    //Let's make a function to move its neighbours around
    function moveAround(el,targ,move) {
        for (var i = 0; i < targ; i++) {
            prev = $('em:nth-of-type('+(el.index()-(i-1))+')'),
            next = $('em:nth-of-type('+(el.index()+(i+1))+')');
            if (move>transY) {
                prev.css({transform: 'rotate('+(prev.index()*2)+'deg) translate(0, '+ (move-i) +'px)'});
                next.css({transform: 'rotate('+(next.index()*2)+'deg) translate(0, '+ (move-i) +'px)'});
            } else {
                prev.css({transform: 'rotate('+(prev.index()*2)+'deg) translate(0, '+ transY +'px)'});
                next.css({transform: 'rotate('+(next.index()*2)+'deg) translate(0, '+ transY +'px)'});
            }
        }
    }

    //Let's move it all around on line hover
    $('em').hover(function() {
        $('i').removeClass('hover');
        $('i:nth-of-type('+($(this).index()+1)+')').addClass('hover');
        moveAround($(this),10,(transY+10));
        moveAround($(this),5,(transY+11));
        moveAround($(this),3,(transY+13));
        moveAround($(this),2,(transY+18));
        $(this).css({ transform: 'rotate('+ $(this).index()*2 +'deg) translate(0, '+ (transY+30) +'px)'});

        //Temperature
        var idx =$(this).index(),diz,unit,incr

        //Dizaine
        for (var i = 0; i < param.step; i++) {
            incr = (i*(param.step*10));
            if (idx>=(0+incr) && idx<(50+incr)) {
                diz = param.YPos+(i*param.YPos)
                diz = diz-diz-diz
            }
        }

        //Unit
        for (var i = 0; i < (param.cycle*2)/10; i++) {
            incr = (i*(param.step));
            if (idx>=(0+incr) && idx<(5+incr)) {
                unit = i*param.YPos
                unit = unit-unit-unit
            }
        }

        $('.dizaine').css({top:diz+9})
        $('.unit').css({top:unit+9})

    },function() {
        moveAround($(this),10,transY);
        $(this).css({transform: 'rotate('+ $(this).index()*2 +'deg) translate(0, '+ transY +'px)'});
    });



    //Apply
    $('.apply').click(function() {
        $('.temperature').addClass('side');
    });
    $('.back, .mobile li').click(function() {
        $('.temperature').removeClass('side');
    });


    //Chat

    var whosgo = true;
    var user;

    function disableSend(bool) {
        $('#send').attr('disabled',bool)
    }

    function send() {
            if ($('#message').val() !== "") {
                $('.discussion').append('<div class="talk me new"><p>'+ $('#message').val() +'</p></div>');
                whosgo = !whosgo;
                if (whosgo) {
                    user = 'Joe '
                } else {
                    user = 'Quentin '
                }
                $('.discussion').animate( { scrollTop:$('.new').length*($('.new').height())*2 } ,400,function () {
                    setTimeout(function () {
                        $('.typing').html(user+'is typing...')
                        setTimeout(function () {
                            if (whosgo) {
                                $('.discussion').append('<div class="talk otherPpl new"><a href="#"><img src="img/joe.png"></a><p>Yeah me too actually !</p></div>');
                            } else {
                                $('.discussion').append('<div class="talk otherPpl new"><a href="#"><img src="img/quentin.png"></a><p>Really?? Wow this is cool</p></div>');
                            }
                            $('.discussion').animate( { scrollTop: $('.new').length*($('.new').height())*2 } ,400);
                            $('.typing').html('');

                        },2000);
                    },1500);
                });
                $('#message').val("").blur();
            }

    }

    //When typing a message
    $('#message').keyup(function () {
        if ($('#message').val() !== "") {
            disableSend(false);
        } else {
            disableSend(true);
        }
        $('.typing').html('You are typing...')
    });

    //Send a message

    //Clicking on send
    $('#send').click(function () {
        send();
    });

    //Or pressing enter
    $('#message').blur(function () {
        if ($('#message').val() === "") {
            disableSend(true);
        }
        $('.typing').html('')
    }).focus(function () {
        $(document).keydown(function(e) {
            if(e.which == 13) {
                send();
                $('#send').addClass('enter');
            }
        }).keyup(function(e) {
            if(e.which == 13) {
                $('#send').removeClass('enter')
            }
        });
    });

    //Smiley
    $('.chat-smiley').click(function () {
        $('.discussion').append('<div class="talk me new smiley"><p><img src="img/smiley.png" alt="smiley"></p></div>')
        .animate( { scrollTop: ($('.new').length*($('.new').height()))+50 } ,400,function () {
            setTimeout(function () {
                $('.typing').html('Quentin is typing...')
                setTimeout(function () {
                    $('.discussion').append('<div class="talk otherPpl new"><a href="#"><img src="img/quentin.png"></a><p>Ahah!<br> That smiley tho! You\'re a funny dude!</p></div>');
                    $('.discussion').animate( { scrollTop: $('.new').length*($('.new').height())*2 } ,400);
                    $('.typing').html('')
                },1000);
            },1000);
        });
    });


});
