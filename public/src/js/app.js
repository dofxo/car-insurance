const log = console.log
import { CarModals } from "./car-render.js"

// selectors
const
    selection = document.querySelectorAll('.selection');

// click event on selection
selection.forEach(selection => {
    selection.addEventListener("click", () => {
        if (selection.children[1].classList.contains("hide")) {
            selection.children[1].classList.remove("hide")
        } else {
            selection.children[1].classList.add("hide")
        }
    })
})

const carModals = new CarModals()
carModals.renderCars()


