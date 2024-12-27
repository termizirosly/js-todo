let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) //for..of loop 
    {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p") //create text element in js and put in DOM
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;


        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) // () => removeItem(idx)  is wrapper syntax

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)

    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
        renderItems()
}


function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
 }

function addItem() {
    const value = input.value;
    if (!value) {
        alert("you cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)


