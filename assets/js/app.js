$(function() {
    // create an array of country names/codes
    var countries = [
        { name: 'Belarus', code: '112'},
        { name: 'United Kingdom', code: '826'},
        { name: 'United States of America', code: '840'},
    ];

    $('#country').typeahead({
        source: countries
    })
    .change(function() {
        var country = $(this).typeahead("getActive");
        console.log(country);
        $('#result').show();
        $('#country-name').text(country.name);
        $('#country-code').text(country.code);
    });


});