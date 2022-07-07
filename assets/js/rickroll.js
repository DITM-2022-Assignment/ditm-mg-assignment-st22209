window.addEventListener("load", function () {
  const rickroll = localStorage.getItem('rickroll');
  if (rickroll !== "yes") {
    return
  }
  window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
  window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
});
