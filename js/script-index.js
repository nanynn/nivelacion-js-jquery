$(document).ready( function(){
	//funcion de desaparecer arrow y menu
	$('#back').remove('index.html');
	$('#menu').remove('recipe.html');
	printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);
	
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e){
		if(e.highlighted == true){
			console.log(e.highlighted);
			renderRecipe(e);
		}
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$('.list-recipes').append('<a class="item-recipe" href="#">'+
								  '<span class="attribution">'+
								   ' <span class="title-recipe">' + recipe.title + '</span>'+
								    '<span class="metadata-recipe">'+
								      '<span class="author-recipe">' + recipe.source.name + '</span>'+
								      '<span class="bookmarks-recipe">'+
								        '<span class="icon-bookmark"></span>'+
								      '</span>'+
								    '</span>' +
								 ' </span>' +
								 '<img src="img/recipes/320x350/' + recipe.name +'.jpg">'+
								'</a>');
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
		activitiesArray.forEach(function(el){
			console.log(el);
				$('.list-activities').append('<a href="#" class="item-activity">'+
										'<span class="attribution">'+
										'<span class="avatar">'+
 											'<img src="https://avatars3.githubusercontent.com/u/204768?v=2&s=400" class="image-avatar">'+
										 '</span>'+
										'<span class="meta">'+
	  									'<span class="author">'+ el.userName +'</span> made' +
	  										'<span class="recipe">'+ el.recipeName+ '</span>:'+ el.text+
	  											'<span class="location">'+ el. place+'</span>'+
											'</span>'+

										'</span>'+
										'<div class="bg-image" style="background-image: url('+el.image +');"></div>'+
								'</a>');
		});
	if (activitiesArray.length > 0) {
			$('.wrapper-message').hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

//funcion que se encarga de pintar una noticia

function printNews(){
	$('.callout-news').append('<p>'+ 'NUEVAS RECETAS' +'</p>')
}




