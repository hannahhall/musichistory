var MusicHistory = (function (music) {

var songsArray = [];
$.getJSON("songs.json").done(fetchSong);

function fetchSong (Data) {
	var jsonSongs = Data.songs;
	$.each(jsonSongs, (song) => {
		songsArray.push(jsonSongs[song]);
		domInput(jsonSongs[song]);
	});
}

function domInput (songInfo) {
	var songInfo = `<div class="songInfo"><h3 class="songTitle">${songInfo.title}</h3>
		<ul>
			<li>${songInfo.artist}</li><li>${songInfo.album}</li><li>${songInfo.genre}</li>
			<li><button class="btn btn-danger delete">Delete</button></li>
		</ul>
	</div>`;
	$("#songList").append(songInfo);
}

$(".showMore").click(() => {
	$.getJSON("songs2.json").done(fetchSong);
})

return music

})(MusicHistory || {})
