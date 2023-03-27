const button = document.querySelector("#frm__btn");
const msg = document.querySelector("#message");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");

button.addEventListener("click" , () => {
    if(msg.value == ""){
        msg.classList.add("input__invalid")
    }
    if(fullname.value == ""){
        fullname.classList.add("input__invalid")
    }
    if(email.value == ""){
        email.classList.add("input__invalid")
    }
})

fullname.addEventListener("focus" , () => {
    fullname.classList.remove("input__invalid")
})
msg.addEventListener("focus" , () => {
    msg.classList.remove("input__invalid")
})
email.addEventListener("focus" , () => {
    email.classList.remove("input__invalid")
})