
$(function() {
    // Configure/customize these variables.
    var showChar = 151;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read less";
    var lesstext = "Read more";


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<em class="moreellipses">' + ellipsestext + ' </em><em class="morecontent"><em style="display:none">' + h + '</em>&nbsp;&nbsp;<a href="" class="morelink">' + lesstext + '</a></em>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(lesstext);
        } else {
            $(this).addClass("less");
            $(this).html(moretext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
