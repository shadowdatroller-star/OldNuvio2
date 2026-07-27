(function () {
  var tvInput = window.tizen && window.tizen.tvinputdevice;

  if (tvInput && typeof tvInput.registerKey === "function") {
    var keys = [
      "Back",
      "Return",
      "MediaPlay",
      "MediaPause",
      "MediaPlayPause",
      "MediaStop",
      "MediaFastForward",
      "MediaRewind",
      "MediaTrackPrevious",
      "MediaTrackNext"
    ];

    for (var i = 0; i < keys.length; i++) {
      try {
        tvInput.registerKey(keys[i]);
      } catch (e) {}
    }
  }

  window.location.href =
    "https://web.nuvioapp.space/?source=tizenbrew&wrapper=tizen&cb=" +
    new Date().getTime();
})();
