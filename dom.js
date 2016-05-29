var	viewLink = $("#viewLink"),
		addLink = $("#addLink"),
		inputName = $("#inputName"),
		inputArtist = $("#inputArtist"),
		inputAlbum = $("#inputAlbum"),
		addButton = $(".addButton"),
		songsArray = 	MusicHistory.getSongsArray(),
		deleteBtn = $(".delete"),
		addMusic = $("#addMusic"),
		viewMusic = $("#viewMusic"),
		filterBtn = $(".filter");

addLink.click(MusicHistory.toggleHidden);
filterBtn.click(MusicHistory.filter);
viewLink.click(MusicHistory.toggleHidden);

addButton.click(function (){
	var newSong = {
		title: inputName.val(),
		artist: inputArtist.val(),
		album: inputAlbum.val(),
		genre: $("input:checkbox:checked").val(),
		length: ""
	}
	songsArray.push(newSong);
	MusicHistory.domInput(newSong);
	$(".artistFilter").append(`<option value="${newSong.artist}">${newSong.artist}</option>`);
	inputName.val("");
	inputArtist.val("");
	inputAlbum.val("");
	MusicHistory.toggleHidden();
})

$("#songList").on("click", ".delete", function(event){
	var songDlt =  $(event.target).closest("div");
	var songTitle = songDlt.children().html();
	songsArray.forEach( (song) => {
		if (song.title === songTitle) {
			var deleteIndex = songsArray.indexOf(song);
			songsArray.splice(deleteIndex, 1);
		}
	});
	songDlt.remove();
})
