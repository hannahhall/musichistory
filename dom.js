var addMusic = $("#addMusic"),
		viewMusic = $("#viewMusic"),
		viewLink = $("#viewLink"),
		addLink = $("#addLink"),
		inputName = $("#inputName"),
		inputArtist = $("#inputArtist"),
		inputAlbum = $("#inputAlbum"),
		addButton = $(".addButton"),
		deleteBtn = $(".delete")

function toggle () {
	viewMusic.toggle();
	addMusic.toggle();
}

addLink.click(toggle);

viewLink.click(toggle);

addButton.click(function (){
	var newSong = {
		title: inputName.val(),
		artist: inputArtist.val(),
		album: inputAlbum.val(),
		genre: $("input:checkbox:checked").val(),
		length: ""
	}
	songsArray.push(newSong);
	domInput(newSong);
	inputName.val("");
	inputArtist.val("");
	inputAlbum.val("");
	toggle();
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

