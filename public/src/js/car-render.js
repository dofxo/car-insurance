/**
 * Creates car modals and renders them into DOM
 */
class CarModals {
    // creates array of car models
    constructor() {
        this.carModelsArray = [
            {
                carName: "سورن پلاس",
                carRatio: 1.5
            },
            {
                carName: "پژو 405",
                carRatio: 1.3
            },
            {
                carName: "پژو 206",
                carRatio: 1.4
            },
            {
                carName: "پراید",
                carRatio: 0.9
            },
        ]
    }
    // creates carItem div
    /**
     * creates a div and puts car names in it
     * @param {number} itemNum - number of item that wants to be rendered
     * @returns {Element} div of items
     */
    createItem(itemNum) {
        // item name
        const item = document.createElement("div")
        item.classList.add("item")
        item.textContent = this.carModelsArray[itemNum].carName
        return item
    }
    /**
     * renders the cars inside drop down menu using createItem method
     * sets the name of the car as the selectors text content after clicking
     */
    renderCars() {
        // selectors
        const
            selection = document.querySelector('.selection');

        // renders cars into DOM 
        //using createItem method to create div
        for (let i = 0; i < this.carModelsArray.length; i++) {
            selection.children[1].append(this.createItem(i))
        }
        // selects items after being created
        let items = document.querySelectorAll(".item");

        // events

        // click event on items
        items.forEach(item => {
            // sets the items text content as the selectors text content
            item.addEventListener("click", () => {
                selection.children[0].textContent = item.textContent
            })
        })
    }
}
export default CarModals