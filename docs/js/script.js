/*
const $listItems = $('header li');
$listItems.each((index, elem) => {
    $(elem).click(() => {
        $listItems.removeClass('active');
        $(elem).addClass('active');
    });
});
$('.navbar-collapse a').click(() => {
    if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-toggle').click();
    }
});
$('.navbar-nav li a').each((index, elem) => {
    $(elem).click(() => {
        const href = $(elem).attr('href');
        $(href).animatescroll({
            scrollSpeed: 4000,
            easing: 'easeOutBack',
            padding: 40
        });
    });
});
*/
$('.film-settings a').click(function(e) {
	e.preventDefault();
});
$('.film-settings a:nth-child(2)').click(function(e) {
	e.preventDefault();
	$('.film-settings a:nth-child(2)').toggleClass('active');
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