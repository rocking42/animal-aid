var locURL = "https://animal-data.herokuapp.com/animals.json";

function modalDisplay(res) {
  var template = $("#modal1").html();
  var result = _.template(template);
  result = result({name: res.name, description: res.description, vidURL: res.vidURL});
  $(".container").html(result);

}

function modalVidDisplay(res) {
  var template = $("#modal2").html();
  var result = _.template(template);
  result = result({vidURL: res.vidURL});
  $(".container").html(result);
}

function displayAnimal(data, b,c, query) {
  var res = data.find(function(animal) {
    return animal.name === query;
  });
  modalDisplay(res);
  var span = document.getElementsByClassName("close")[0];
  var modal = document.querySelector('#myModalText');
  modal.style.display = "block";
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  span.onclick = function() {
    modal.style.display = "none";
  };
}

function displayAnimalVid(data, b,c, query) {
  var res = data.find(function(animal) {
    return animal.name === query;
  });
  modalVidDisplay(res);
  var modal = document.querySelector('#myModalVid');
  var movie = document.querySelector(".animalMovie");
  modal.style.display = "block";
  window.onclick = function(event) {
      if (event.target == modal) {
          movie.parentNode.removeChild(movie);
          modal.style.display = "none";
      }
  };
}

var dataFun;
var findAnimal = function(query, dataCont) {
  dataFun = dataCont;
  $.ajax({
    url: locURL,
    type: "GET",
    crossDomain: true,
    dataType: "JSON"
  })
  .done(function(a,b,c) {
    if (dataFun === "text") {
      displayAnimal(a,b,c, query);
    } else {
      displayAnimalVid(a,b,c,query);
    }
  })
  .fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
  });
};

$(document).ready(function() {
  $(".infoBut").on("click", function() {
      findAnimal(this.getAttribute("data-type"), this.getAttribute("data-type"));
  });

  $(".vidBut").on("click", function() {
    findAnimal(this.innerHTML, this.getAttribute("data-type"));
  });
});
