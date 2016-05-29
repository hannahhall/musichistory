var MusicHistory = (function (music) {
	var filterBtn = $(".filter"),
		genre = $("input:checkbox:checked").val();
		album = $(".albumFilter"),
		artist = $(".artistFilter"),
		length = $('#lengthFilter'),
		songsArray = [];

	$.getJSON("songs.json").done(fetchSong);

	function fetchSong (Data) {
		var jsonSongs = Data.songs;
		$.each(jsonSongs, (song) => {
			songsArray.push(jsonSongs[song]);
			music.domInput(jsonSongs[song]);
		});
		addInfo();
	}

	music.domInput = function (songInfo) {
		var songInfo = `<div class="songInfo"><h3 class="songTitle">${songInfo.title}</h3>
			<ul>
				<li>${songInfo.artist}</li><li>${songInfo.album}</li><li>${songInfo.genre}</li>
				<li><button class="btn btn-danger delete">Delete</button></li>
			</ul>
		</div>`;
		$("#songList").append(songInfo);
	}

	function addInfo () {
		songsArray.forEach ((song) =>{
			var artistInfo = `<option value="${song.artist}">${song.artist}</option>`;
			artist.append(artistInfo);
		})
	}

	music.getSongsArray = function () {
		return songsArray;
	}

	$(".showMore").click(() => {
		$.getJSON("songs2.json").done(fetchSong);
	})

	return music

})(MusicHistory || {})
