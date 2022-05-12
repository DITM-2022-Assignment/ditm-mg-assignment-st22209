function syncDelay(milliseconds) {
  var start = new Date().getTime();
  var end = 0;
  while (end - start < milliseconds) {
    end = new Date().getTime();
  }
}

window.addEventListener("load", function () {
  syncDelay(2000);
  window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
  window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
});
