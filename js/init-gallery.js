$(document).ready(function () {
	$('#lightgallery').justifiedGallery({
		// use any rowHeight, this value is just chosen because it looks good here
		rowHeight: 250,
	}).on('jg.complete', function () {
		// the 'subHtmlSelectorRelative: true' option never seems to work :(
		// even if you set the justifiedGallery 'captions: false' option
		lightGallery(document.getElementById('lightgallery'));
	});
});