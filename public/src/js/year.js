class PersianDate {
    constructor() {
        this.date = new Date().toLocaleDateString('fa-IR')
    }
    year() {
        // current year (in persian)
        let yearOnly = this.date.split('/').slice(0, 1).join('')
        // converted current year (english)
        yearOnly = yearOnly.replace(/[۰-۹]/g, digit => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
        return yearOnly
    }
    currenYearToNYearsBack(years) {

        this.yearsArray = []
        let currentYear = this.year()

        for (let i = 0; i <= years; i++) {

            this.yearsArray.push(currentYear)
            currentYear -= 1

        }
        return this.renderDates()

    }
    renderDates() {
        this.yearsArray.forEach(date => {
            // element's box
            const carRegistrationItems = document.querySelector('#car-registration-year-items')
            //  each new Year Div
            const yearElement = document.createElement('div')
            yearElement.classList.add('year-element')
            yearElement.textContent = date
            // appending each new year element to the wrapper
            carRegistrationItems.append(yearElement)

            // selection text will be change to the selected year Element textContent
            const selection = document.querySelectorAll('.selection span')

            yearElement.addEventListener('click', () => {
                selection[1].textContent = yearElement.textContent
            })

        })
    }
}

export default PersianDate

