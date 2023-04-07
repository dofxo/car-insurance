const log = console.log
import { CarModals } from "./car-render.js"

// selectors
const carModelItemsBox = document.querySelector('.drop-down'),
    selection = document.querySelector('.selection');

// click event on selection
selection.addEventListener("click", () => {
    if (carModelItemsBox.classList.contains("hide")) {
        carModelItemsBox.classList.remove("hide")
    } else {
        carModelItemsBox.classList.add("hide")
    }
})

const carModals = new CarModals()
carModals.renderCars()


