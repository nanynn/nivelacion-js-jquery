$(document).ready(function() {
	console.log('hola mundo');
	showRecipe();
	showMake();
	
});


function showRecipe(){
	$('.js-show-recipe').click(function() {
		$('#contenedor').removeClass('make');
	});
}

function showMake(){
	$('.js-show-make').click(function() {
		$('#contenedor').addClass('make');
	});
}