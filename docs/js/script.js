const $listItems = $('header li'),
	$filmSettingsChild = $('.film-settings a:nth-child(2)');
$listItems.each((index, elem) => {
	$(elem).click(() => {
		$listItems.removeClass('active');
		$(elem).addClass('active');
		if (!$('.your-account').hasClass('active')) {
			$('.your-account a').css('background', 'url("../images/locked-inactive.png") left center no-repeat');
		} else {
			$('.your-account a').css('background', 'url("../images/locked-active.png") left center no-repeat');
		}
	});
});
$('.navbar-collapse a').click(() => {
	if ($('.navbar-collapse').hasClass('show')) {
		$('.navbar-toggler').click();
	}
});
$('.film-settings a').click(e => {
	e.preventDefault();
});
$filmSettingsChild.click(e => {
	e.preventDefault();
	$filmSettingsChild.toggleClass('active');
	$('.film .film-playlist').toggle();
});
$('.film-playlist-title button').click(function() {
	if ($(this).parents('.film-playlist-item').hasClass('active')) {
		$(this).parents('.film-playlist-item').removeClass('active');
	} else {
		$('.film-playlist-item').removeClass('active');
		$(this).parents('.film-playlist-item').toggleClass('active');
	}
});