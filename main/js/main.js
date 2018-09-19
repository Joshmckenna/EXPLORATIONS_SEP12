// intro page

const headerTag = document.querySelector("header")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  console.log(pixels)
  if (pixels > 80) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
})
