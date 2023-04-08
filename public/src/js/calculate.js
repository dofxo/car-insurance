import addCommaToNumber from "./helpers/comaInBetweenNumbers.js"
import PersianDate from "./year.js"
class CalculateInsurance {
    constructor(carName, carRegistrationYear, insuranceType) {
        this.carName = carName
        this.carRegistrationYear = carRegistrationYear
        this.insuranceType = insuranceType

        this.renderFactor()
    }
    renderFactor() {
        // selectors
        const
            carModel = document.querySelector('#car-model'),
            calculateHint = document.querySelector('#calculate-hint'),
            carRegisterYear = document.querySelector('#car-registration-year'),
            carInsuranceType = document.querySelector('#car-insurance-type')

        if (this.carName !== "نوع خودرو را مشخص کنید" && this.carRegistrationYear !== "سال ساخت خودرو را مشخص کنید" && this.insuranceType) {
            carModel.innerHTML = this.carName
            carRegisterYear.innerHTML = this.carRegistrationYear
            carInsuranceType.innerHTML = this.insuranceType
            calculateHint.classList.add("hide")
            this.calulate()
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

    calulate() {
        // cost holder (div)
        const carInsuranceCost = document.querySelector('#car-insurance-cost')
        let currentYear = new PersianDate().year()
        let yearDifference = ((currentYear - this.carRegistrationYear) === 0 ? 0.9 : currentYear - this.carRegistrationYear)

        this.carRatio = 0
        this.baseCost = 1_000_000
        this.totalCost = 0
        this.yearRatio = (yearDifference) * 0.5

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
        if (this.insuranceType === 'شخص ثالث') {
            this.thirdPersonInsurance()
        } else {
            this.bodyInsurance()
        }

        // outPuts the total cost
        carInsuranceCost.textContent = addCommaToNumber(this.totalCost.toFixed()) + " " + 'تومان'



    }
    thirdPersonInsurance() {
        this.totalCost = this.carRatio * this.yearRatio * this.baseCost
    }
    bodyInsurance() {

    }

}

export default CalculateInsurance



