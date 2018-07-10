	function handleAPIloaded(){
		$('#request').attr('disabled',false);
		}
	$('#request').click(function(){search();
	});


	//Search for specific string
	function search (){
		var q = $("#Actor").val();
		$.getJSON("https://www.googleapis.com/youtube/v3/search", {
		q: q,
			part:	"snippet",
				key: "AIzaSyDaMZmKj51SstpXIrDiQegkzRzAt5YYeKM",
					type: "video"	
	},
		function (data) {
			console.log (data.items);
			Shortvideo (data.items);
		});
	};
	function Shortvideo (data) {
		for (var a=0; a<=6; a++){
			$("#b"+a)
			.html("<a href='https://www.youtube.com/watch?v=" + data[a].id.videoId +"'><img src='"+data[a].snippet.thumbnails.medium.url + "'>" + data[a].snippet.title +"</a>" );

		};
	};