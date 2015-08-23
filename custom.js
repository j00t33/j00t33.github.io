$('#home').click(function() {
	$('.home').fadeIn();
	$('.about').slideUp();
});

$('#about').click(function() {
	$('.about').fadeIn();
	$('.home').slideUp();
});