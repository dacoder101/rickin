function timeOuted() {
  document.getElementById("body").style.backgroundImage = "url('../Resources/entity.jpeg')"
  document.getElementById("text").remove()
}

setTimeout(timeOuted, 10000)