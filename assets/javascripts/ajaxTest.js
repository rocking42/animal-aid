var locURL = "https://animal-data.herokuapp.com/animals.json";

function modalDisplay(res) {
  var template = $("#modal1").html();
  var result = _.template(template);
  result = result({name: res.name, description: res.description, vidURL: res.vidURL});
  $(".container").html(result);

  var modal = document.querySelector('#myModal');
  modal.style.display = "block";
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
}

function displayAnimal(data, b,c, query) {
  res = data.find(function(animal) {
    return animal.name === query;
  });
  modalDisplay(res);
}

var findAnimal = function(query) {
  $.ajax({
    url: locURL,
    type: "GET",
    crossDomain: true,
    dataType: "JSON"
  })
  .done(function(a,b,c) {
    displayAnimal(a,b,c, query);
  })
  .fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
  });
};

$(document).ready(function() {
  $("#req").on("click", function() {
    findAnimal(this.innerHTML);
  });

});
