var MusicHistory = (function(filters){
	var filterBtn = $(".filter"),
			album = $(".albumFilter"),
			artist = $(".artistFilter"),
			length = $('#lengthFilter'),
			songsArray = MusicHistory.getSongsArray();

	artist.change(() => {
		var artistFilter = songsArray.filter((song) =>{
			return song.artist === artist.val();
		});
		artistFilter.forEach((song) =>{
				$(".albumFilter").append(`<option value="${song.album}">${song.album}</option>`);
		});
	});

	filters.filter = () => {
		$("#songList").empty();
		var artistFilter = songsArray.filter((song) =>{
			return song.artist === artist.val();
		});
		var albumFilter = songsArray.filter((song) =>{
			return song.album === album.val();
		});
		var genreFilter = songsArray.filter((song) =>{
			return song.genre === $("input:checkbox:checked").val();
		});
		artistFilter.forEach((song) =>{
			MusicHistory.domInput(song);
		});
		albumFilter.forEach((song) =>{
			MusicHistory.domInput(song);
		});
		genreFilter.forEach((song) =>{
			MusicHistory.domInput(song);
		});
	};

	return filters;

})(MusicHistory || {});
