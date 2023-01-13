function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("black")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("black")) {
    img.setAttribute("src", "./assets/avatar-black.png.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png.png")
  }
}
