// what I am clicking to trigger
const toggleTag = document.querySelector("a.toggleNav")

// this is the tag we are trying to change
const mainTag = document.querySelector("main")

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and not, make the toggle tag say open
toggleTag.addEventListener("click", function () {
  // toggle = add/remove
  mainTag.classList.toggle("open")

  // changes menu image/.svg file and HTML
  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="images/close.svg"> Close`
  } else {
    toggleTag.innerHTML = `<img src="images/menu.svg"> Menu`
  }
})
