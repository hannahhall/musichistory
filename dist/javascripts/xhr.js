"use strict";
var MusicHistory = (function (music) {
	const url = 'https://musichistory-da08d.firebaseio.com/songs';
	var filterBtn = $(".filter"),
			genre = $("input:checkbox:checked").val(),
			album = $(".albumFilter"),
			artist = $(".artistFilter"),
			length = $('#lengthFilter'),
			songsArray = [];

	$.get(`${url}.json`)
		.done((data) => {
			if (data) {
				Object.keys(data).forEach((id) => {
					music.domInput(data[id], id);
					addInfo(data[id]);
				});
			}
		});

	music.domInput = function (songInfo, id) {
		var songInput = `<div class="songInfo list-item" data-id="${id}"><h3 class="songTitle">${songInfo.title}</h3>
			<ul>
				<li>${songInfo.artist}</li><li>${songInfo.album}</li><li>${songInfo.genre}</li>
				<li><button class="btn btn-danger delete">Delete</button></li>
			</ul>
		</div>`;
		$("#songList").append(songInput);
	};

	function addInfo (song) {
		//some sort of if statement to check if the artist has already been added????
		var artistInfo = `<option value="${song.artist}">${song.artist}</option>`;
		artist.append(artistInfo);
	}

	music.getSongsArray = function () {
		return songsArray;
	};

	return music;

})(MusicHistory || {});
