/**
 * Creates car modals and renders them into DOM
 */
export class CarModals {
    // creates array of car models
    constructor() {
        this.carModelsArray = [
            "سورن پلاس",
            "پراید",
            "پژو 206",
            "پژوه 405",
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
        item.textContent = this.carModelsArray[itemNum]
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