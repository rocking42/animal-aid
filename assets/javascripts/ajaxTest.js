function displayAnimal(data) {
  $(".container").append(JSON.stringify(data));
}

var locURL = "https://animal-data.herokuapp.com/animals.json";

var findAnimal = function() {
  $.ajax({
    url: locURL,
    type: "GET",
    crossDomain: true,
    dataType: "JSON"
  }).done(displayAnimal)
    .fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });
};

$(document).ready(function() {
  $("#req").on("click", function() {
    findAnimal();
  });
});
