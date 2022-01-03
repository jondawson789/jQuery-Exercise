
  
    $("#movieRatings").on("submit", function(evt) {
      evt.preventDefault();
      let title = $("#title").val();
      let rating = $("#rating").val();
  
  
      $("#ratedMovies").append(`<tr><td>${title}</td> <td>${rating}</td> <td><button class = "btn">Delete</button></td><tr>`);
    });

    $("table").on("click", ".btn", function(evt) {
        $(evt.target.parentElement.parentElement).remove();  
      });
  