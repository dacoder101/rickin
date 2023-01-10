function bgpChange() {
  document.getElementById("body").style.backgroundImage = "url('../Resources/entity.jpeg')"
  document.getElementById("text").remove()
}

setTimeout(bgpChange, 10000)