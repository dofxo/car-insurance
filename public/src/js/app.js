const log = console.log
import { CarModals } from "./car-render.js"
import PersianDate from "./year.js";

// selectors
const
    selection = document.querySelectorAll('.selection'),
    insuranceCheckBox = document.querySelectorAll(".insurance-type-check-box");

// events
insuranceCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        // Remove "checked" class from all insurance-type-checkboxes
        insuranceCheckBox.forEach((item) => item.classList.remove("checked"));

        if (checkbox.classList.contains("checked")) {
            // Remove "checked" class from clicked checkbox.
            checkbox.classList.remove("checked");
        } else {
            // Add "checked" class to clicked checkbox.
            checkbox.classList.add("checked");
        }
    });
});

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




//  renders a "new 20 years from" now list
new PersianDate().currenYearToNYearsBack(20)
