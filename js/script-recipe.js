$(document).ready(function() {
	console.log('hola mundo');
	showRecipe();
	showMake();
	
});

function showRecipe(){
	$('.js-show-recipe').click(function() {
		$('#contenedor').removeClass('make');
		$('.js-show-recipe').removeClass('active');
		$('.js-show-make').addClass('active');
		
		
	});
}

function showMake(){
	$('.js-show-make').click(function() {
		$('#contenedor').addClass('make');
		
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');
	});
}