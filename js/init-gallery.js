$(document).ready(function () {
	$('#lightgallery').justifiedGallery({
		// use any rowHeight, 300 is just chosen in this case because it looks good
		rowHeight: 300,
	}).on('jg.complete', function () {
		// the 'subHtmlSelectorRelative: true' option never seems to work :(
		// even if you set the justifiedGallery 'captions: false' option
		lightGallery(document.getElementById('lightgallery'));
	});
});