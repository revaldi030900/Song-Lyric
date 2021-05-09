$('#input-button').on('click', function(){
	$('#song-list').html('');
	var link = 'https://api.lyrics.ovh/suggest/';
	var link1 = 'https://api.lyrics.ovh/v1/';
	var link2= $('#input-text').val();
	var link3 = $('#input-text2').val();
	var link4 = link1 + link2 + '/' + link3;
	var link5 = link + link2 +'-'+ link3;
	$.ajax({
		url: link4,
		type: 'get',
		dataType : 'json',
		success:function(song){
			let data = song.lyrics;
			$('#song-list').html(`<pre>`+ data +`</pre>`);
		}
	});
});