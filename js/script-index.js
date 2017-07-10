$(document).ready( function(){
	//funcion de desaparecer arrow y menu
	$('#back').remove('index.html');
	$('#menu').remove('recipe.html');
	printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	
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
    
	//$('.list-recipes').append('<span class="title-recipe">' + element.title +'</span>');
    /*<span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title" ) </span>
    <span class="metadata-recipe">
      <span class="author-recipe"> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name") </span>*/


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
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




