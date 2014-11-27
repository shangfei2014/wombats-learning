$(document).ready(function(){
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    auto: true,
    autoControls: true,
    randomStart: true,
    responsive: false,
    speed: 100,
    pause: 30000
  });

  setInterval(function(){ location.reload()}, 3600000);
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