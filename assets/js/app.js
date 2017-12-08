$(function() {
    $('#country').typeahead({
        source: countries
    })
    .change(function() {
        var country = $(this).typeahead("getActive");
        console.log(country);
        $('#result').show();
        $('#country-name').text(country.name);
        $('#country-code').text(country.alpha3Code)
    });
});