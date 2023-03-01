let accordionItems = document.querySelectorAll(".accordion-item")
console.log(accordionItems)

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("accordionActive")
      })
});
