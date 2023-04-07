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
    createItem(itemNum) {
        // item name
        const item = document.createElement("div")
        item.classList.add("item")
        item.textContent = this.carModelsArray[itemNum]
        return item
    }
    // renders the cars inside drop down menu
    renderCars() {
        // selectors
        const carModelItemsBox = document.querySelector('.drop-down'),
            selection = document.querySelector('.selection');

        // renders cars into DOM
        for (let i = 0; i < this.carModelsArray.length; i++) {
            carModelItemsBox.append(this.createItem(i))
        }
        // selects items after being created
        let items = document.querySelectorAll(".item");

        // events

        // click event on selection
        selection.addEventListener("click", () => {
            if (carModelItemsBox.classList.contains("hide")) {
                carModelItemsBox.classList.remove("hide")
            } else {
                carModelItemsBox.classList.add("hide")
            }
        })

        // click event on items
        items.forEach(item => {
            // sets the items text content as the selectors text content
            item.addEventListener("click", () => {
                selection.children[0].textContent = item.textContent
            })
        })
    }
}