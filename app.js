const body = document.getElementById("body")

const fadeIn = document.getElementsByClassName("fade-in")
const fadeUp = document.getElementsByClassName("fade-up")

console.log(body)

document.addEventListener("scroll", () => {

    for (let i = 0; i < fadeIn.length; i++) {
        const mathy = fadeIn[i].getBoundingClientRect().top - window.innerHeight
        if (mathy < 0) {
            fadeIn[i].classList.add('in-view');
        }
    }

  
})