(function ($) {
    //    "use strict";

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: 'Tuguegarao',
            woeid: woeid,
            unit: 'c',
            success: function (weather) {

                html = '<i class="wi wi-yahoo-' + weather.code + '"></i><h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
                html += '<div class="city">' + weather.city + ', ' + weather.region + '</div>';
                html += '<div class="currently">' + weather.currently + '</div>';
                html += '<div class="">' + '&nbsp;</div>';

                $("#weather-one").html(html);
            },
            error: function (error) {
                $("#weather-one").html('<p>' + error + '</p>');
            }
        });
    }


    // init
    loadWeather('Dhaka', '');

})(jQuery);