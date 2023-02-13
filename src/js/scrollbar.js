const scrollbar = document.querySelector(".scrollbar")
const content = document.querySelector(".content__section")
let timer = null


content.addEventListener("scroll", () => {
    timer && clearTimeout(timer)
    let top = content.scrollTop
    scrollbar.style.transition = "0"
    scrollbar.style.opacity = 1
    scrollbar.style.transform = "scale(1)"
    if (top <= 0) {
        scrollbar.style.top = top + 10 + "px"
    }
    else {
        scrollbar.style.top = top - 110 + "px"
    }
    timer = setTimeout(() => {
        scrollbar.style.transform = "scale(0)"
        scrollbar.style.opacity = 0
    } , 3000)
})

document.addEventListener("keydown" , (event) => {
    console.log(event.key)
})