$(document).ready(function(){
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    auto: true,
    autoControls: true
  });
});

function loadAudio(id, audioName) {
  $("#audio-" + id).jWebAudio("addSoundSource", {
    'url': baseUrl() + "/audios/" + audioName,
    'multishot': true,
    'preLoad': true
  });
}

function play(id) {
  $("#audio-" + id).jWebAudio("play");
}