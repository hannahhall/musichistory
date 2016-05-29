var MusicHistory = (function(toggle) {
	var addMusic = $("#addMusic"),
			viewMusic = $("#viewMusic");

	toggle.toggleHidden = function () {
		viewMusic.toggle();
		addMusic.toggle();
	}

	return toggle;
})(MusicHistory || {})
