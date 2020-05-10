(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
var name;
byeSpeaker.speak=function(name) {
  console.log(speakWord + " " + byeSpeaker.name);
  }

 window.byeSpeaker = byeSpeaker;

})(window);



