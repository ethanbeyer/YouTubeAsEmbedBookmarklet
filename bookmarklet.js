javascript:(function(){
	var video_id = window.location.search.split("v=")[1],
		ampersandPosition = video_id.indexOf("&"),
		ytplayer = document.getElementById("movie_player"),
		$time = ytplayer.getCurrentTime();

	$time = Math.round($time);
	if(ampersandPosition != -1) {
		video_id = video_id.substring(0, ampersandPosition);
	}
	window.location.assign("http://youtube.com/embed/" + video_id + "?autoplay=1&start=" + $time);
})();
