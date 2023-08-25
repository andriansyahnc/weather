$(document).ready(() => {
  $('#submit').attr('disabled', 'disabled');
  $('#name').on('keyup', function (event) {
    const name = $('#name').val();
    if (name.length >= 3) {
      $.ajax({
        url: `/country/find?name=${name}`,
        method: 'GET',
        success: function(data) {
          $('#autocompleteResults').empty();

          if (data.data.length === 0) {
            $('#submit').attr('disabled', 'disabled');
          }
          data.data.forEach(function(item) {
            console.log(item);
            const name = `${item.name}${item.state ? `, ${item.state}` : ""} (${item.country})`;
            $('#autocompleteResults').append(`<li name="${name}" lat="${item.lat}" lon="${item.lon}">${name}</li>`);
          });
        },
        error: function(error) {
          console.error('Error:', error);
          $('#submit').attr('disabled', 'disabled');
        }
      });
    }
  });

  $('#autocompleteResults').on('click', 'li', function (event) {
    $('#name').val($(this).attr('name'));
    $('#name').attr('lat', $(this).attr('lat'));
    $('#name').attr('lon', $(this).attr('lon'));
    $('#autocompleteResults').empty();
    $('#submit').removeAttr('disabled');
  });

  $('#submit').on('click', function (event) {
    event.preventDefault();

    const lat = $('#name').attr('lat');
    const lon = $('#name').attr('lon');

    $.ajax({
      url: `/weather?lat=${lat}&lon=${lon}`,
      method: 'GET',
      success: function(data) {
        const temperature = data.data.main.temp;
        const weatherDes = data.data.weather[0].description;
        const icon = data.data.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
        const cityName = data.data.name;
        $('#weather-result').removeAttr('hidden');
        $('#weather-result-value').text(`The weather is ${temperature} degree celsius in ${cityName} and the description is ${weatherDes}`)
        $('#weather-result-icon').attr('src', imageURL);
      },
      error: function(error) {
        console.error('Error:', error);
        $('#submit').attr('disabled', 'disabled');
      }
    });

  });
});
