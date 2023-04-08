class CalculateInsurance {
    constructor(carName, carRegistrationYear, insuranceType) {
        this.carName = carName
        this.carRegistrationYear = carRegistrationYear
        this.insuranceType = insuranceType

        this.calculate()
    }
    calculate() {
        // selectors
        const
            carModel = document.querySelector('#car-model'),
            calculateHint = document.querySelector('#calculate-hint'),
            carRegisterYear = document.querySelector('#car-registration-year'),
            carInsuranceType = document.querySelector('#car-insurance-type'),
            carInsuranceConst = document.querySelector('#car-insurance-cost');
        if (this.carName !== "نوع خودرو را مشخص کنید" && this.carRegistrationYear !== "سال ساخت خودرو را مشخص کنید" && this.insuranceType) {
            carModel.innerHTML = this.carName
            carRegisterYear.innerHTML = this.carRegistrationYear
            carInsuranceType.innerHTML = this.insuranceType
            calculateHint.classList.add("hide")
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

}

export default CalculateInsurance