function boooo() {
  var but = document.getElementById("btn__img");
  but.style.backgroundImage = "url(https://64.media.tumblr.com/tumblr_maiubutRWP1rfjowdo1_r1_500.gif)";
}
function mario() {
  var but = document.getElementById("btn__img");
  but.style.backgroundImage = "url(https://c.tenor.com/3uHxa8bk_lkAAAAi/mario-super-mario.gif)";
}

function booming() {
  var boom = document.getElementsByTagName("link")[0];
  var bext = document.getElementById("btn__boom");
  if (boom.getAttribute("href") == "style.css") {
    boom.setAttribute("href", "boom.css");
    bext.textContent = "Turn back Time";
  }
  else {
    boom.setAttribute("href", "style.css");
    bext.textContent = "Stop it!";
  }
}
