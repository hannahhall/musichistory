"use strict";
const url = 'https://musichistory-da08d.firebaseio.com/songs';
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
	};
	$.post(`${url}.json`, JSON.stringify(newSong)).done(() => {location.reload();});
	$(".artistFilter").append(`<option value="${newSong.artist}">${newSong.artist}</option>`);
});

$("#songList").on("click", ".delete", function(event){
	var songDlt =  $(event.target).closest("div");
	var taskId = songDlt.data('id');
	$.ajax({
		url: `${url}/${taskId}.json`,
		method: 'DELETE'
	}).done(() => {
		songDlt.remove();
	});
});
