$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val())
    })
});

document.getElementById("ipButton").addEventListener('click', function(){

    $.getJSON('http://gd.geobytes.com/GetCityDetails?', function(data) {
        alert(JSON.stringify(data, null, 2));
    });

})

