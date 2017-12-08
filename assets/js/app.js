$(function() {
    // create an array of country names/codes
    var countries;

    $.ajax({
        method: 'GET',
        url: 'assets/data/countries.json',
        dataType: 'json'
    }).done(function(data) {
        countries = data;

        $('#country').typeahead({
            source: countries
        })
        .change(function () {
            var country = $(this).typeahead("getActive");
            console.log(country);
            $('#result').show();
            $('#country-name').text(country.name);
            $('#country-code').text(country.alpha3Code);
        });
    });
});