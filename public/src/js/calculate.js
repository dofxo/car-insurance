// imports
import addCommaToNumber from "./helpers/comaInBetweenNumbers.js"
import PersianDate from "./year.js"
/** 
 * calculates the Insurance based on given values from dropdown menus in DOM
 * 
 */
class CalculateInsurance {
    /**
     * calls the renderFactor method
     * @param {string} carName - car's name
     * @param {number} carRegistrationYear - car's registration year number
     * @param {string} insuranceType - type of insurance
     */
    constructor(carName, carRegistrationYear, insuranceType) {
        this.carName = carName
        this.carRegistrationYear = carRegistrationYear
        this.insuranceType = insuranceType
        this.renderFactor()
    }
    /** renders the factor inside DOM */
    renderFactor() {
        // selectors
        const
            carModel = document.querySelector('#car-model'),
            calculateHint = document.querySelector('#calculate-hint'),
            carRegisterYear = document.querySelector('#car-registration-year'),
            carInsuranceType = document.querySelector('#car-insurance-type')

        if (this.carName !== "انتخاب نوع خودرو" &&  this.carRegistrationYear !== "انتخاب سال ساخت" && this.insuranceType) {
            carModel.innerHTML = this.carName
            carRegisterYear.innerHTML = this.carRegistrationYear
            carInsuranceType.innerHTML = this.insuranceType
            calculateHint.classList.add("hide")
            this.calculate()
            this.toggleVisibility()
        } else {
            // removes the class list "hide" to show the item
            calculateHint.classList.remove("hide")
            // removes "animation" class after 300ms so next time the animation applies
            setTimeout(() => {
                calculateHint.classList.remove('animation');
            }, 300);
            /// adds "animation" class
            calculateHint.classList.add("animation")
        }
    }
    /** toggles the visibility of elements */
    toggleVisibility() {
        const
            factorWrapper = document.querySelector('#factor-wrapper'),
            loadingWrapper = document.querySelector('#loading-wrapper');
        // toggle items
        loadingWrapper.classList.remove("hide")
        factorWrapper.classList.add("hide")
        setTimeout(() => {
            loadingWrapper.classList.add("hide")
            factorWrapper.classList.remove("hide")
        }, 2000)
    }

    /** calculates the amount of insurance */
    calculate() {

        // cost holder (div)
        const carInsuranceCost = document.querySelector('#car-insurance-cost')
        /** base variables */
        this.currentYear = new PersianDate().year()
        this.yearDifference = ((this.currentYear - this.carRegistrationYear) === 0 ? 0.9 : this.currentYear - this.carRegistrationYear)
        this.carRatio = 0
        this.baseCost = 1_000_000
        this.totalCost = 0

        //  sets the car Ratio
        if (this.carName === 'سورن پلاس') {
            this.carRatio = 1.5
        }
        else if (this.carName === 'پژو 206') {
            this.carRatio = 1.4
        }
        else if (this.carName === 'پراید') {
            this.carRatio = 0.9
        }
        else if (this.carName === 'پژوه 405') {
            this.carRatio = 1.3
        }
        //  checks for the insuranceType
        /** if it is thirdPerson this code will be executed */
        if (this.insuranceType === 'شخص ثالث') {
            this.thirdPersonInsurance()
        }
        /** if it is body Insurance this code will be executed */
        else {
            this.bodyInsurance()
        }
        // calculates the total cost of insurance
        this.totalCost = this.carRatio * this.yearRatio * this.baseCost

        // outPuts the total cost
        carInsuranceCost.textContent = addCommaToNumber(this.totalCost.toFixed()) + " " + 'تومان'
    }
    /** updates the year ratio */
    thirdPersonInsurance() {
        this.yearRatio = (this.yearDifference) * 0.5
    }
    /** updates the year ratio */
    bodyInsurance() {
        this.yearRatio = (this.yearDifference) * 0.8
    }

}
export default CalculateInsurance



