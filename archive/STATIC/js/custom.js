$(document).ready(function() {

var fade_in_videos = document.querySelectorAll('.fade-in-video');
for( i=0; i<fade_in_videos.length; i++ ) {
    fade_in_videos[i].addEventListener("playing", function(){
        this.className += ' is-playing';
    });
}

var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
if( iOS ) {
    var background_videos = document.querySelectorAll('.video-bg video');
    for( i=0; i<background_videos.length; i++ ) {
        background_videos[i].parentNode.removeChild(background_videos[i]);
    }
}

});