$(document).ready(function(){

var apiKey ='5182bbd11c76e6b9d60dae8adc3b808b'

    $('#search-button').click(function(){
        console.log('button clicked')

        var city =$('searchValue').val();
            today(city);
            getForecast(city);
            addCity(city);
    });  

    function today(city){
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' +'APPID=5182bbd11c76e6b9d60dae8adc3b808b',
            type: 'GET',
            dataType: 'json',
        })
    }


    $('#form').submit(function(event){
event.preventDefault()
    });










});