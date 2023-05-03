function startTimer() {
  var hours = parseInt(prompt("Enter the number of hours: "));
  var minutes = parseInt(prompt("Enter the number of minutes: "));
  var seconds = parseInt(prompt("Enter the number of seconds: "));

  var totalTime = (hours * 3600) + (minutes * 60) + seconds;

  setTimeout(function() {
    alert("Timer Expired!");
    var audio = new Audio('sound.mp3');
    audio.play();
  }, totalTime * 1000);
}
