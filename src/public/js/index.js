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
            const name = `${item.name}${item.state ? `, ${item.state}` : ""} (${item.country})`;
            $('#autocompleteResults').append(`<li city="${item.name}" state="${item.state}" country="${item.country}" cityFullName="${name}" lat="${item.lat}" lon="${item.lon}">${name}</li>`);
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
    $('#name').val($(this).attr('cityFullName'));
    $('#name').attr('lat', $(this).attr('lat'));
    $('#name').attr('lon', $(this).attr('lon'));
    $('#name').attr('city', $(this).attr('city'));
    $('#name').attr('state', $(this).attr('state'));
    $('#name').attr('country', $(this).attr('country'));
    $('#autocompleteResults').empty();
    $('#submit').removeAttr('disabled');
  });

  $('#submit').on('click', function (event) {
    event.preventDefault();

    const lat = $('#name').attr('lat');
    const lon = $('#name').attr('lon');
    const city = $('#name').attr('city');
    const state = $('#name').attr('state');
    const country = $('#name').attr('country');
    const cityName = $('#name').val();

    $.ajax({
      url: `/weather?lat=${lat}&lon=${lon}&city=${city}&state=${state}&country=${country}`,
      method: 'GET',
      success: function(data) {
        const temperature = data.data.temperature;
        const weatherDes = data.data.description;
        const icon = data.data.icon;
        const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
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
