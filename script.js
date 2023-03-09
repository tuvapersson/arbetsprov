let accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("accordionActive")
      })
});

let galleryButtons = [...document.querySelectorAll(".gallery-circle")]
let productImage = document.querySelector(".product-img")

galleryButtons.forEach(item => {
  item.addEventListener('click', () => {
    for (let i = 0; i < galleryButtons.length; i++) {
      galleryButtons[i].style.opacity = 0.7
    }
    item.style.opacity = 1;
      if (item == galleryButtons[0]) {
        productImage.src = "./img/main.jpg"
      }
      else if (item == galleryButtons[1]) {
        productImage.src = "./img/main2.jpg"
      }
      else if (item == galleryButtons[2]) {
        productImage.src = "./img/main3.jpg"
      }
    })
});

let sizeButtons = [...document.querySelectorAll(".size")]

sizeButtons.forEach(item => {
  item.addEventListener('click', () => {
    for (let i = 0; i < sizeButtons.length; i++) {
      sizeButtons[i].style.backgroundColor = "#fff"
      sizeButtons[i].style.color = "#000"
    }
    item.style.backgroundColor = "#000"
    item.style.color = "#fff"
    })
});

let hamburgerMenu = document.querySelector(".hamburger-menu")
let hamburgerMenuSpans = [...document.querySelectorAll(".hamburger-span")]

hamburgerMenu.addEventListener('click', toggleHamburger)

function toggleHamburger() {
  for (let i = 0; i < hamburgerMenuSpans.length; i++) {
    hamburgerMenuSpans[i].classList.toggle("cross")
  }
}
