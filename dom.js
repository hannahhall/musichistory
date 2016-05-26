var addMusic = $("#addMusic"),
		viewMusic = $("#viewMusic"),
		viewLink = $("#viewLink"),
		addLink = $("#addLink"),
		inputName = $("#inputName"),
		inputArtist = $("#inputArtist"),
		inputAlbum = $("#inputAlbum"),
		addButton = $(".addButton");

addLink.click(function (event){
	console.log(event);
	viewMusic.hide();
	addMusic.show();
})

viewLink.click(function() {
	addMusic.hide();
	viewMusic.show();
})

addButton.click(function (){
	var newSong = `${inputName.val()} - by ${inputArtist.val()} from the album ${inputAlbum.val()}`;
	songs.push(newSong);
	domInput(newSong);
	inputName.val("");
	inputArtist.val("");
	inputAlbum.val("");
})
