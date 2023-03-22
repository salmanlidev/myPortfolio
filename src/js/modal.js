const data = [
    {
        name: "instagram",
        imgURL: "./src/images/portfolio/port.jpg",
        projectLink: "https://instagram-clone-salmanlidev.netlify.app/"
    },
    {
        name: "pizza",
        imgURL: "./src/images/portfolio/port2.jpg",
        projectLink: "https://karvanrestoran.netlify.app"
    },
    {
        name: "fullstack",
        imgURL: "./src/images/portfolio/port3.jpg",
        projectLink: "https://sammibasicsite.netlify.app"
    },
    {
        name: "whatsapp",
        imgURL: "./src/images/portfolio/port4.jpg",
        projectLink: "https://sammiwhatsappclone.netlify.app"
    },
    {
        name: "ecommerce",
        imgURL: "./src/images/portfolio/port5.jpg",
        projectLink: "https://wondrous-daffodil-b6960f.netlify.app"
    } ,
    {
        name: "youtube",
        imgURL: "./src/images/portfolio/port6.jpg",
        projectLink: "https://magical-sprite-45656a.netlify.app/"
    },
    {
        name: "movie",
        imgURL: "./src/images/portfolio/port7.jpg",
        projectLink: "https://adorable-rolypoly-860fbe.netlify.app"
    }
]

const buttons = document.querySelectorAll(".skill__item__btn");
const modal = document.querySelector(".projectModal");
const close__btn = document.querySelector(".modal__close")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const d = data.find(d => d.name === e.target.id)
        modal.style.display = "flex"
        modal.children[1].setAttribute("href", d.projectLink)
        modal.children[0].children[1].setAttribute("src", d.imgURL)
    })
})

close__btn.addEventListener("click", () => {
    modal.style.display = "none"
})

