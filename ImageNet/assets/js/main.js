$(document).ready(function(){
	console.log('hello world');

	/*$('.btn-box').click(function(){
		$('.box').addClass('active');
	});


	$('btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});*/

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn-europe').click(function(){
		$('.item').addClass('hide');
		$('.item.europe').removeClass('hide');
		//alert("europe");
	});

	$('.btn-north_america').click(function(){
		$('.item').addClass('hide');
		$('.item.na').removeClass('hide');
		//alert("NA");
	});

	$('.btn-asia').click(function(){
		$('.item').addClass('hide');
		$('.item.asia').removeClass('hide');
		//alert("asia");
	});

	$('.btn-oceania').click(function(){
		$('.item').addClass('hide');
		$('.item.oceania').removeClass('hide');
		//alert("oceania");
	});

	$('.btn-south_america').click(function(){
		$('.item').addClass('hide');
		$('.item.sa').removeClass('hide');
		//alert("SA");
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
		//alert("reset");
	});

});