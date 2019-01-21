$(function(){
    var mapsStyle = $.ajax({
  dataType: "json",
  url: "data/maps_style.json",
  async: true,
  success: function(result) {}
});

$.when(mapsStyle).done(function(mapsStyleData ) {

    var myLatLng = {lat: 47.218371, lng: -1.553621000000021};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapsStyleData,
    disableDefaultUI: true
    });

    var losAngeles = {lat: 34.0522342, lng: -118.2436849};
    var sanFrancisco = {lat: 37.77493, lng: -122.419416};
    var sydney = {lat: -33.8688197, lng: 151.20929550000005};
    var nantes = {lat: 47.218371, lng: -1.553621000000021};
    var rennes = {lat: 48.117266, lng: -1.6777925999999752};


    function newLocation(city) {
        map.setCenter(city);
        map.setZoom(14)
    }

    $('.chat-mark + ul li').click(function() {

        switch ($(this).index()) {
            case 0:
                newLocation(losAngeles)
                break;
            case 1:
                newLocation(sanFrancisco)
                break;
            case 2:
                newLocation(sydney)
                break;
            case 3:
                newLocation(nantes)
                break;

        }
        google.maps.event.addDomListener(window, 'load');
    });

    $('.chat-home').click(function() {
        $('.chat-mark + ul li').removeClass('active');
        $('.chat-mark + ul li:nth-of-type(4)').addClass('active');
         newLocation(rennes)
    });
    $('.plus').click(function() {
         map.setZoom(map.getZoom() + 1)
    });

    $('.minus').click(function() {
         map.setZoom(map.getZoom() - 1)
    });
    $('.chat-world').click(function() {
        newLocation(nantes);
        map.setZoom(4)
    });


});



});
