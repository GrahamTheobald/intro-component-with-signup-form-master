const form = document.querySelector(".component__form")
const inputs = form.querySelectorAll("input")

form.addEventListener("submit", e => {
    e.preventDefault()
    inputs.forEach(input => {
        if (input.matches("[type='button']")) return
        hideErrors(input)
        if (input.matches("#emailAddress")) {
            const email = input.value
            if (!validate_email(email)) {
                revealErrors(input)
                return
            }
        }
        if (input.value == '') {
            revealErrors(input)
        }
    })
})


function validate_email(email) {
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailFormat)) return true
    return false;
}

function revealErrors(input) {
    const [img, message] = accessErrorElements(input)
    img.classList.remove("hidden")
    message.classList.remove("hidden")

}

function hideErrors(input) {
    const [img, message] = accessErrorElements(input)
    img.classList.add("hidden")
    message.classList.add("hidden")
}

function accessErrorElements(input) {
    const div = input.closest(".component__form__input")
    const img = div.querySelector("img")
    const message = div.querySelector(".errorMessage")
    return [img, message]
}