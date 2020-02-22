


document.getElementById("recipeSubmit").addEventListener("click", function(event) {
	event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;


	const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url)
	.then(function(response) {
      return response.json();
    }).then(function(json) {
			let results = "";
			results+= '<br>';
			results+= "<h1>Recipes</h1>";
			results+= '<br>';
			json.meals.forEach((element) => {
				results+= '<h2>' + element.strMeal + '</h2>';
				results+= '<img src="' + element.strMealThumb + '" max-width = 100% height = auto /a>';
				results+=  '<center> <p>' + element.strInstructions + '</p> </center>';
				results+= '<br>';
			});

			document.getElementById("recipeResults").innerHTML = results;
		});




});
