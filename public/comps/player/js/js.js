$(function(){

    var currentSong = 1;
    var audio = $('audio')[0];



    function upDateSong(counter) {

        $('audio').attr('src','music/complexe/'+$('li:nth-of-type('+ counter +')').find('p span').text() + '.mp3')
        $('.active').removeClass('show');
        if (counter <= 1) { $('#prv').attr('disabled',true) }
        else if (counter === $('li').length) { $('#nxt').attr('disabled',true) }
        else {$('#nxt,#prv').attr('disabled',false)}

        $('.player h2').html($('li:nth-of-type('+ currentSong +')').find('p span').text())

        $('li').removeClass('active chat-play chat-pause');
        $('li:nth-of-type('+ counter +')').addClass('active chat-play');
    }



    $('#play').click(function () {
        audio[ audio.paused ? 'play' : 'pause']();

        currentSong = ($('.active').index())+1;
        if (currentSong === 1 && !$('li:first-child').hasClass('chat-play')) {
            $('li:first-child').attr('class','active chat-pause')
        }
        $('.active, #play span').toggleClass('chat-pause chat-play');


    });

    $('#nxt').click(function() {
        currentSong++;
        upDateSong(currentSong);
        audio[ audio.paused ? 'play' : 'pause']();

    });
    $('#prv').click(function() {
        currentSong--;
        upDateSong(currentSong);
        audio[ audio.paused ? 'play' : 'pause']();
    });



    $('.tracks li').click(function () {

        if ($(this).hasClass('active')) {
            audio[ audio.paused ? 'play' : 'pause']();
            $('.active, #play span').toggleClass('chat-play chat-pause');
        } else {
            upDateSong($(this).index()+1);
            audio[ audio.paused ? 'play' : 'pause']();
        }
        currentSong = ($('.active').index())+1;
        $('.player h2').html($('li:nth-of-type('+ ($(this).index()+1) +')').find('p span').text())
    }).each(function(i) {
        var src = 'music/complexe/'+$('li:nth-of-type('+ (i+1) +')').find('p span').text() + '.mp3'
        $('#audios').append('<audio src="'+src+'" type="audio/mp3"></audio')
        $('<span class="idx">'+(i+1)+'</span>').prependTo(this);
        $('<p>Pierre de Bethmann - Complexe</p>').appendTo($(this).find('p'));
        /*$('<strong>'+ 'allé' +'</strong>').appendTo(this);*/
    });



    audio.ontimeupdate = function () {
        var percent = (audio.currentTime / audio.duration)*100;

        if (percent !== percent) {
            percent = 1
        }
        new Chartist.Pie('#progressPie', {
          series: [percent]
        }, {
            donut: true,
            donutWidth: 18,
            startAngle: 245,
            total: 157,
            showLabel: false,
            height: 218
          });

          if (percent === 100) {
              currentSong++
              upDateSong(currentSong);
              audio[ audio.paused ? 'play' : 'pause']();
          }

    };

    $('.witness').mousedown(function (e) {
        e.preventDefault();
        $('.chat-dwnld').addClass('active');
    }).mouseup(function () {
        $('.chat-dwnld').removeClass('active');

    });
















});
