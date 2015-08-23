$('#home').click(function() {
	$('.home').slideDown();
	$('.about').fadeOut();
});

$('#about').click(function() {
	$('.about').fadeIn();
	$('.home').slideUp();
});
