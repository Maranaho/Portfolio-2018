$(function(){


    //Today
    var d = new Date(),
        currentMonth = d.getMonth()+1,
        nth = d.getDate();

    switch (currentMonth) {
        case 1:
            currentMonth = "January"
            break;
        case 2:
            currentMonth = "February"
            break;
        case 3:
            currentMonth = "March"
            break;
        case 4:
            currentMonth = "April"
            break;
        case 5:
            currentMonth = "May"
            break;
        case 6:
            currentMonth = "June"
            break;
        case 7:
            currentMonth = "July"
            break;
        case 8:
            currentMonth = "August"
            break;
        case 9:
            currentMonth = "September"
            break;
        case 10:
            currentMonth = "October"
            break;
        case 11:
            currentMonth = "November"
            break;
        case 12:
            currentMonth = "December"
            break;
    }

    switch (nth) {
        case 1:
            nth = nth + "st"
            break;
        case 2:
            nth = nth + "nd"
            break;
        case 3:
            nth = nth + "rd"
            break;
        default: nth = nth + "th"

    }
    var today = currentMonth + " " + nth;
    var hours = d.getHours();
    var min = d.getMinutes();
    function add0(val) {
        if (val >= 0 && val < 10) {val = '0'+ val}
        return val;
    }
    $('.chat-date').append(today);
    $('.chat-time').append(add0(hours)+':'+ add0(min));




    //Addition
    var nbReserved = 2;
    var row = $('.chat-check').closest('tr').index();
    var seat = $('.chat-check').closest('td').index();


    //Reserver sa place
    $('.seats table tr').each(function (index) {
        $(this).find('td:first-child,td:last-child').append(index+1)
    });

    function updateSelection(newSeat) {
        var seats = [];
        if (newSeat !== undefined) {
            seats.push({
                r:newSeat.closest('tr').index()+1,
                s:newSeat.closest('td').index()
            })
        }

        $('.addition').html('');

        $('button.chat-check').each(function () {
            row = $(this).closest('tr').index()+1;
            seat = $(this).closest('td').index();
            seats.push({r:row,s:seat})
        });
        console.log(seats.length);
        for (var i = 1; i <= nbReserved; i++) {
            $('<span>Row '+ seats[i-1].r +' / s'+ seats[i-1].s +'</span>').prependTo('.addition')
        }

    }

    $('button.available').click(function () {

        row = $(this).closest('tr').index()+1;
        seat = $(this).closest('td').index();

        if ($(this).hasClass('chat-check')) { nbReserved-- } else { nbReserved++ }
        updateSelection($(this));

        $(this).toggleClass('chat-check');
        total(nbReserved);

    });
    function total(multiple) {
        $('.total strong').html('$'+multiple*11);
        $('h2 span').html(multiple);
    }
    total(nbReserved);
    $('button.chat-check').each(function () {
        row = $(this).closest('tr').index()+1;
        seat = $(this).closest('td').index();
        $('<span>Row '+ row +' / s'+ seat +'</span>').prependTo('.addition')

    });
});
