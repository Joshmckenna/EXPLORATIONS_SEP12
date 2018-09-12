// referenced via Rik Lomas: SuperHi.com 2018

// --- --- --- --- --- --- --- --- --- --- --- --- //


let pageNumber = 0


const pages = [
  {copy: 'a 32" flatscreen 1080p television.', background: '#edc7a9'},
  {copy: "Kanye West's new album.", background: '#a1fffe'},
  {copy: 'cat/kitten scratch-post.', background: '#d3c7f3'},
  {copy: 'a new queen-sized mattress.', background: '#faffb8'}
]

const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('p')
const bodyTag = document.querySelector('body')

const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener('click', function() {
  next()
})

previousTag.addEventListener('click', function() {
  previous()
})

randomTag.addEventListener('click', function() {
  random()
})


document.addEventListener('keyup', function(event) {
  console.log(event)

  if (event.key == 'ArrowRight') {
    next()
  }

  if (event.key == 'ArrowLeft') {
    previous()
  }
})
