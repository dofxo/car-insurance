const log = console.log
import { CarModals } from "./car-render.js"
import PersianDate from "./year.js";
import CalculateInsurance from "./calculate.js";

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

// gets the values after clicking the calc button and calcs the insurance amount
const calculateButton = document.querySelector('#calculate-button')




// call the calculate method in the calculate class
const insuranceCheckBoxes = document.querySelectorAll('.insurance-type-check-box')
calculateButton.addEventListener('click', () => {
    // car model value
    const carModelNameValue = document.querySelector('#car-model-box > span').textContent
    // car registration value
    const carRegistrationYearValue = document.querySelector('#car-registration-year-box > span').textContent
    // insuranceType 
    let insuranceTypeValue
    // choosing the checked insuranceType
    insuranceCheckBoxes.forEach(
        item => {
            if (item.classList.contains('checked')) {
                insuranceTypeValue = item.nextElementSibling.textContent
            }
        }
    )
    // gathering the inforamtions for calculating the insurance
    new CalculateInsurance(carModelNameValue, carRegistrationYearValue, insuranceTypeValue)
})