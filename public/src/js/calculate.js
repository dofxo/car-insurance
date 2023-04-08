class CalculateInsurance {
    constructor(carName, carRegistrationYear, insuranceType) {
        this.carName = carName
        this.carRegistrationYear = carRegistrationYear
        this.insuranceType = insuranceType

        this.calculate()
    }
    calculate() {
        console.log(this.carName);
        console.log(this.carRegistrationYear);
        console.log(this.insuranceType);
    }
}

export default CalculateInsurance